// AUTO WALA: Workshop, Customization & Upgrades Engine
import { sound } from './audio.js';

const STORAGE_KEY = 'autowala_save_v1';

export class GarageManager {
  constructor(rickshaw, physics, onStateChange) {
    this.rickshaw = rickshaw;
    this.physics = physics;
    this.onStateChange = onStateChange;

    this.state = {
      cash: 500, // ₹500 starting virtual rupees
      upgrades: {
        speed: 1,
        accel: 1,
        brakes: 1,
        nitro: 1
      },
      currentSkin: 'delhi',
      unlockedSkins: ['delhi'],
      currentDecal: 'hornok',
      unlockedDecals: ['hornok'],
      currentHorn: 'peepoo',
      unlockedHorns: ['peepoo']
    };

    this.upgradeCatalog = {
      speed: { name: 'Engine Tuning', maxLvl: 5, baseCost: 300, costMult: 1.6 },
      accel: { name: 'Throttle Response', maxLvl: 5, baseCost: 250, costMult: 1.5 },
      brakes: { name: 'Disc Brakes', maxLvl: 5, baseCost: 200, costMult: 1.5 },
      nitro: { name: 'NOS Cylinder', maxLvl: 3, baseCost: 500, costMult: 2.0 }
    };

    this.skinsCatalog = [
      { id: 'delhi', name: 'Delhi NCR Green & Yellow', price: 0, preview: '#0D7B3E', roof: '#FFB800' },
      { id: 'mumbai', name: 'Mumbai Kaali Peeli', price: 350, preview: '#1A1A1A', roof: '#FFD600' },
      { id: 'ev', name: 'Cyber EV Auto (Electric)', price: 600, preview: '#00B0FF', roof: '#00E676' },
      { id: 'royal', name: 'Royal Saffron Gold', price: 500, preview: '#D84315', roof: '#FFD700' },
      { id: 'bollywood', name: 'Bollywood Star Pink', price: 450, preview: '#E91E63', roof: '#FFEB3B' },
      { id: 'shadow', name: 'Midnight Shadow Stealth', price: 700, preview: '#11161B', roof: '#263238' }
    ];

    this.decalsCatalog = [
      { id: 'hornok', name: 'HORN OK PLEASE', price: 0, tag: 'Traditional' },
      { id: 'aashirwad', name: 'माँ का आशीर्वाद', price: 150, tag: 'Devotional' },
      { id: 'buramat', name: 'बुरी नज़र वाले तेरा मुँह काला', price: 150, tag: 'Nazar Battu' },
      { id: 'apnatime', name: 'APNA TIME AAYEGA 🔥', price: 200, tag: 'Gully Boy' },
      { id: 'king', name: 'KING OF ROADS 👑', price: 250, tag: 'Royal' }
    ];

    this.hornsCatalog = [
      { id: 'peepoo', name: 'Dual-Tone Pee-Poo', price: 0, desc: 'Classic Indian Rickshaw Horn' },
      { id: 'beep', name: 'Tuk-Tuk Beep', price: 100, desc: 'Crisp City Street Beep' },
      { id: 'pressure', name: 'High-Pitch Pressure Horn', price: 250, desc: 'Highway Truck Horn' }
    ];

    this.loadSave();
    this.applyAllToRickshaw();
  }

  // Load saved data from localStorage
  loadSave() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        this.state = { ...this.state, ...parsed };
      }
    } catch(e) {
      console.warn('Could not load save game:', e);
    }
  }

  // Save current progress to localStorage
  saveGame() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      if (this.onStateChange) this.onStateChange(this.state);
    } catch(e) {
      console.warn('Could not save game:', e);
    }
  }

  resetSave() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      this.state.cash = 500;
      this.state.upgrades = { speed: 1, accel: 1, brakes: 1, nitro: 1 };
      this.state.currentSkin = 'delhi';
      this.state.unlockedSkins = ['delhi'];
      this.state.currentDecal = 'hornok';
      this.state.unlockedDecals = ['hornok'];
      this.state.currentHorn = 'peepoo';
      this.state.unlockedHorns = ['peepoo'];
      this.applyAllToRickshaw();
      this.saveGame();
    } catch(e) {}
  }

  addCash(amount) {
    this.state.cash = Math.max(0, this.state.cash + amount);
    this.saveGame();
  }

  deductCash(amount) {
    this.state.cash = Math.max(0, this.state.cash - amount);
    this.saveGame();
  }

  getUpgradeCost(type) {
    const info = this.upgradeCatalog[type];
    const currentLvl = this.state.upgrades[type] || 1;
    if (currentLvl >= info.maxLvl) return null; // Maxed out
    return Math.round(info.baseCost * Math.pow(info.costMult, currentLvl - 1));
  }

  buyUpgrade(type) {
    const cost = this.getUpgradeCost(type);
    if (cost === null || this.state.cash < cost) return false;

    this.state.cash -= cost;
    this.state.upgrades[type] += 1;
    sound.playCoinJingle();
    this.applyAllToRickshaw();
    this.saveGame();
    return true;
  }

  selectSkin(skinId) {
    const item = this.skinsCatalog.find(s => s.id === skinId);
    if (!item) return false;

    if (!this.state.unlockedSkins.includes(skinId)) {
      if (this.state.cash < item.price) return false;
      this.state.cash -= item.price;
      this.state.unlockedSkins.push(skinId);
      sound.playCoinJingle();
    }

    this.state.currentSkin = skinId;
    this.applyAllToRickshaw();
    this.saveGame();
    return true;
  }

  selectDecal(decalId) {
    const item = this.decalsCatalog.find(d => d.id === decalId);
    if (!item) return false;

    if (!this.state.unlockedDecals.includes(decalId)) {
      if (this.state.cash < item.price) return false;
      this.state.cash -= item.price;
      this.state.unlockedDecals.push(decalId);
      sound.playCoinJingle();
    }

    this.state.currentDecal = decalId;
    this.applyAllToRickshaw();
    this.saveGame();
    return true;
  }

  selectHorn(hornId) {
    const item = this.hornsCatalog.find(h => h.id === hornId);
    if (!item) return false;

    if (!this.state.unlockedHorns.includes(hornId)) {
      if (this.state.cash < item.price) return false;
      this.state.cash -= item.price;
      this.state.unlockedHorns.push(hornId);
      sound.playCoinJingle();
    }

    this.state.currentHorn = hornId;
    sound.playHorn(hornId);
    setTimeout(() => sound.stopHorn(), 500);
    this.saveGame();
    return true;
  }

  applyAllToRickshaw() {
    this.rickshaw.applySkin(this.state.currentSkin);
    this.rickshaw.applyDecal(this.state.currentDecal);
    this.physics.applyUpgrades(this.state.upgrades);

    // If EV skin selected, turn on cool cyan underglow
    const isEV = (this.state.currentSkin === 'ev');
    this.rickshaw.setUnderglow(isEV, 0x00E5FF);
  }
}
