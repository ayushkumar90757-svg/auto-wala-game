// AUTO WALA: Procedural Canvas Texture Generator for Indian City & Rickshaw
import * as THREE from 'three';

class TextureFactory {
  constructor() {
    this.cache = new Map();
  }

  // Asphalt road texture with dashed center lines and yellow road borders
  createRoadTexture() {
    const key = 'road_main';
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Dark grey tarmac
    ctx.fillStyle = '#22252A';
    ctx.fillRect(0, 0, 512, 512);

    // Subtle asphalt grain noise
    for (let i = 0; i < 2000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#1C1E22' : '#2A2D33';
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }

    // Yellow solid edge lines
    ctx.fillStyle = '#FFC107';
    ctx.fillRect(16, 0, 8, 512);
    ctx.fillRect(512 - 24, 0, 8, 512);

    // White dashed lane divider down the center
    ctx.fillStyle = '#FFFFFF';
    for (let y = 0; y < 512; y += 64) {
      ctx.fillRect(252, y + 10, 8, 44);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    this.cache.set(key, texture);
    return texture;
  }

  // Zebra Crossing Texture
  createZebraTexture() {
    const key = 'road_zebra';
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#22252A';
    ctx.fillRect(0, 0, 512, 256);

    // Thick white zebra stripes
    ctx.fillStyle = '#F5F5F5';
    for (let x = 20; x < 512; x += 60) {
      ctx.fillRect(x, 20, 36, 216);
    }

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Iconic Indian Yellow & Black Striped Kerb Texture
  createKerbTexture() {
    const key = 'kerb_indian';
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Alternating yellow and black stripes
    const blockW = 32;
    for (let x = 0; x < 256; x += blockW) {
      ctx.fillStyle = ((x / blockW) % 2 === 0) ? '#FFB800' : '#1A1A1A';
      ctx.fillRect(x, 0, blockW, 64);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    this.cache.set(key, texture);
    return texture;
  }

  // Building Facade Texture with windows, shutters, AC compressors
  createBuildingTexture(theme = 'orange') {
    const key = `bldg_${theme}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const wallColors = {
      orange: '#D97736',
      yellow: '#E5A93B',
      blue: '#3A7499',
      teal: '#2F8578',
      brick: '#A84332',
      cream: '#DDD2B8'
    };

    ctx.fillStyle = wallColors[theme] || '#D97736';
    ctx.fillRect(0, 0, 512, 512);

    // Windows grid
    for (let floor = 0; floor < 4; floor++) {
      const y = 50 + floor * 115;
      for (let col = 0; col < 4; col++) {
        const x = 40 + col * 115;

        // Window frame
        ctx.fillStyle = '#222';
        ctx.fillRect(x, y, 65, 80);

        // Glass panes (with slight reflection)
        ctx.fillStyle = Math.random() > 0.4 ? '#688B9A' : '#F5D77F'; // some lighted windows
        ctx.fillRect(x + 4, y + 4, 26, 32);
        ctx.fillRect(x + 35, y + 4, 26, 32);
        ctx.fillRect(x + 4, y + 40, 26, 34);
        ctx.fillRect(x + 35, y + 40, 26, 34);

        // Balcony grill or AC box on some windows
        if (floor > 0 && col % 2 === 0) {
          ctx.fillStyle = '#EEE';
          ctx.fillRect(x - 5, y + 60, 28, 20);
          ctx.fillStyle = '#333';
          ctx.fillRect(x - 2, y + 65, 12, 10); // fan grill
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Indian Shop Signboard Textures
  createShopSign(type = 'chai') {
    const key = `shop_${type}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    const shops = {
      chai: {
        bg: '#D32F2F',
        border: '#FFD700',
        title: '☕ SHARMA SPECIAL CHAI & SAMOSA',
        sub: 'गरमा गरम कड़क चाय • नाश्ता कॉर्नर',
        subColor: '#FFF8E1'
      },
      sweets: {
        bg: '#F57C00',
        border: '#FFFFFF',
        title: '🍮 AGRAWAL MITHAI BHANDAR',
        sub: 'शुद्ध देशी घी की जलेबी, रसगुल्ला व काजू कतली',
        subColor: '#FFF'
      },
      kirana: {
        bg: '#1976D2',
        border: '#FFEB3B',
        title: '🛒 GUPTA GENERAL & PROVISION STORE',
        sub: 'Daily Fresh Groceries, Spices & FMCG',
        subColor: '#FFEB3B'
      },
      paan: {
        bg: '#388E3C',
        border: '#FFD700',
        title: '🌿 BANARASI PAAN MAHAL',
        sub: 'मीठा पान • गुटखा मुक्त • कोल्ड ड्रिंक्स',
        subColor: '#FFF'
      },
      medical: {
        bg: '#00897B',
        border: '#E0F2F1',
        title: '➕ APOLLO 24x7 MEDICAL & PHARMACY',
        sub: 'All Medicines, First Aid & Doctor Clinic',
        subColor: '#E0F2F1'
      },
      station: {
        bg: '#B71C1C',
        border: '#FFF',
        title: '🚆 CENTRAL RAILWAY TERMINAL',
        sub: 'केंद्रीय रेलवे स्टेशन • PLATFORM 1 - 8',
        subColor: '#FFEB3B'
      },
      metro: {
        bg: '#0D47A1',
        border: '#64B5F6',
        title: '🚇 METRO STATION - LINE 1',
        sub: 'Entry Gate 2 • Smart Card Recharge',
        subColor: '#FFF'
      }
    };

    const config = shops[type] || shops.chai;

    // Background
    ctx.fillStyle = config.bg;
    ctx.fillRect(0, 0, 512, 128);

    // Decorative border
    ctx.strokeStyle = config.border;
    ctx.lineWidth = 6;
    ctx.strokeRect(6, 6, 500, 116);

    // Title English
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.title, 256, 52);

    // Subtitle Hindi / Details
    ctx.fillStyle = config.subColor;
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillText(config.sub, 256, 96);

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Rickshaw Desi Decals: "Horn OK Please", "Maa Ka Aashirwad", etc.
  createDecalTexture(type = 'hornok') {
    const key = `decal_${type}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, 256, 64);

    if (type === 'hornok') {
      // Classic Indian Truck Art: HORN - OK - PLEASE
      ctx.fillStyle = '#FFEB3B';
      ctx.font = '800 20px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('HORN', 16, 40);

      // Center red circle with OK
      ctx.fillStyle = '#D32F2F';
      ctx.beginPath();
      ctx.arc(128, 32, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 18px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('OK', 128, 39);

      ctx.fillStyle = '#FFEB3B';
      ctx.font = '800 20px Arial, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('PLEASE', 240, 40);
    } else if (type === 'aashirwad') {
      ctx.fillStyle = '#FF5722';
      ctx.font = 'bold 18px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('★ माँ का आशीर्वाद ★', 128, 38);
    } else if (type === 'buramat') {
      ctx.fillStyle = '#FFC107';
      ctx.font = 'bold 16px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('बुरी नज़र वाले तेरा मुँह काला 🌶️', 128, 38);
    } else if (type === 'apnatime') {
      ctx.fillStyle = '#00E676';
      ctx.font = '800 20px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('APNA TIME AAYEGA 🔥', 128, 38);
    } else if (type === 'king') {
      ctx.fillStyle = '#FFD700';
      ctx.font = '800 18px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👑 KING OF ROADS 👑', 128, 38);
    }

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Number Plate Texture
  createNumberPlateTexture(plateNo = 'DL 1R AW 2026') {
    const key = `plate_${plateNo}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');

    // Indian Commercial Vehicle Yellow Number Plate
    ctx.fillStyle = '#FFD600';
    ctx.fillRect(0, 0, 160, 40);

    // Black border
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.strokeRect(2, 2, 156, 36);

    // Blue IND strip
    ctx.fillStyle = '#0D47A1';
    ctx.fillRect(4, 4, 18, 32);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('IND', 13, 24);

    // License Plate Characters
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(plateNo, 92, 26);

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Traffic Signpost textures (Stop, Speed 40, No Horn)
  createSignTexture(type = 'speed40') {
    const key = `sign_${type}`;
    if (this.cache.has(key)) return this.cache.get(key);

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 128, 128);

    if (type === 'speed40') {
      // Circular white sign with thick red border and black "40"
      ctx.fillStyle = '#D32F2F';
      ctx.beginPath();
      ctx.arc(64, 64, 60, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(64, 64, 46, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#111';
      ctx.font = '900 44px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('40', 64, 79);
    } else if (type === 'stop') {
      // Red Octagon
      ctx.fillStyle = '#D32F2F';
      ctx.beginPath();
      ctx.arc(64, 64, 58, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFF';
      ctx.font = '900 30px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('STOP', 64, 74);
    } else if (type === 'nohorn') {
      // Circular No Honking sign
      ctx.fillStyle = '#D32F2F';
      ctx.beginPath();
      ctx.arc(64, 64, 60, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(64, 64, 46, 0, Math.PI * 2);
      ctx.fill();

      // Bugle graphic + slash
      ctx.fillStyle = '#222';
      ctx.font = '36px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🎺', 64, 76);

      ctx.strokeStyle = '#D32F2F';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(30, 30);
      ctx.lineTo(98, 98);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Auto Stand Signboard
  createAutoStandSign() {
    const key = 'sign_autostand';
    if (this.cache.has(key)) return this.cache.get(key);
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFC107';
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = '#0D7B3E';
    ctx.fillRect(8, 8, 496, 112);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 34px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🛺 AUTO RICKSHAW STAND', 256, 52);
    ctx.fillStyle = '#FFD54F';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText('RAILWAY STATION • PRE-PAID BOOTH', 256, 92);
    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }

  // Platform Signboards
  createPlatformSign(num = 1) {
    const key = `sign_plat_${num}`;
    if (this.cache.has(key)) return this.cache.get(key);
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0D47A1';
    ctx.fillRect(0, 0, 256, 80);
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, 248, 72);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`PLATFORM ${num}`, 128, 50);
    const texture = new THREE.CanvasTexture(canvas);
    this.cache.set(key, texture);
    return texture;
  }
}

export const textureFactory = new TextureFactory();
