// AUTO WALA: Responsive UI, HUD, 2D Radar Minimap & Touch Controls
export class UIManager {
  constructor(garage, missionManager) {
    this.garage = garage;
    this.missionManager = missionManager;

    // Input state
    this.inputs = {
      steer: 0,
      throttle: 0,
      brake: 0,
      handbrake: false,
      nitro: false
    };

    // DOM Elements Cache
    this.hudOverlay = document.getElementById('hud-overlay');
    this.hudCash = document.getElementById('hud-cash');
    this.hudMissionBadge = document.getElementById('hud-mission-badge');
    this.hudMissionText = document.getElementById('hud-mission-text');
    this.hudSpeed = document.getElementById('hud-speed');
    this.hudGear = document.getElementById('hud-gear');
    this.speedoFill = document.getElementById('speedo-fill');
    this.hudNitroFill = document.getElementById('hud-nitro-fill');
    this.hudHealthFill = document.getElementById('hud-health-fill');

    // Fare & Dialog
    this.rideCard = document.getElementById('ride-card');
    this.meterFare = document.getElementById('meter-fare');
    this.meterDist = document.getElementById('meter-dist');
    this.rideDestName = document.getElementById('ride-dest-name');
    this.dialogBubble = document.getElementById('dialog-bubble');
    this.dialogAvatar = document.getElementById('dialog-avatar');
    this.dialogName = document.getElementById('dialog-name');
    this.dialogMsg = document.getElementById('dialog-msg');

    // Navigation Arrow
    this.navArrowContainer = document.getElementById('nav-arrow-container');
    this.navArrow = document.getElementById('nav-arrow');
    this.navDistLabel = document.getElementById('nav-dist-label');

    // Alert Banner
    this.alertBanner = document.getElementById('alert-banner');
    this.alertIcon = document.getElementById('alert-icon');
    this.alertText = document.getElementById('alert-text');
    this.alertTimeout = null;

    // Minimap
    this.minimapCanvas = document.getElementById('minimap-canvas');
    this.minimapCtx = this.minimapCanvas.getContext('2d');

    // Modals
    this.mainMenu = document.getElementById('main-menu');
    this.garageModal = document.getElementById('garage-modal');
    this.careerModal = document.getElementById('career-modal');
    this.dailyModal = document.getElementById('daily-modal');
    this.howtoModal = document.getElementById('howto-modal');
    this.settingsModal = document.getElementById('settings-modal');
    this.pauseModal = document.getElementById('pause-modal');
    this.resultModal = document.getElementById('mission-result-modal');

    // Callbacks
    this.onStartGame = null;
    this.onResetVehicle = null;
    this.onToggleCamera = null;
    this.onToggleEnv = null;
    this.onToggleRain = null;
    this.onPlayHorn = null;
    this.onStopHorn = null;

    this.bindEvents();
    this.renderGarageCatalog();
    this.renderMissionsList();
    this.renderDailyList();
  }

  bindEvents() {
    // 1. Keyboard Controls
    const keysDown = {};
    window.addEventListener('keydown', (e) => {
      keysDown[e.code] = true;

      if (e.code === 'KeyH') {
        if (this.onPlayHorn) this.onPlayHorn();
      }
      if (e.code === 'KeyC') {
        if (this.onToggleCamera) this.onToggleCamera();
      }
      if (e.code === 'KeyR') {
        if (this.onResetVehicle) this.onResetVehicle();
      }
      if (e.code === 'Escape') {
        this.togglePause();
      }
    });

    window.addEventListener('keyup', (e) => {
      keysDown[e.code] = false;
      if (e.code === 'KeyH') {
        if (this.onStopHorn) this.onStopHorn();
      }
    });

    this.updateKeyboardInputs = () => {
      let steer = 0;
      let throttle = 0;
      let brake = 0;

      if (keysDown['KeyA'] || keysDown['ArrowLeft']) steer -= 1;
      if (keysDown['KeyD'] || keysDown['ArrowRight']) steer += 1;
      if (keysDown['KeyW'] || keysDown['ArrowUp']) throttle = 1;
      if (keysDown['KeyS'] || keysDown['ArrowDown']) brake = 1;

      const handbrake = !!keysDown['Space'];
      const nitro = !!(keysDown['ShiftLeft'] || keysDown['ShiftRight']);

      // Blend touch inputs if active
      this.inputs.steer = steer !== 0 ? steer : this.touchSteer;
      this.inputs.throttle = throttle !== 0 ? throttle : this.touchThrottle;
      this.inputs.brake = brake !== 0 ? brake : this.touchBrake;
      this.inputs.handbrake = handbrake || this.touchHandbrake;
      this.inputs.nitro = nitro || this.touchNitro;
    };

    // 2. Mobile Touch Buttons
    this.touchSteer = 0;
    this.touchThrottle = 0;
    this.touchBrake = 0;
    this.touchHandbrake = false;
    this.touchNitro = false;

    const bindTouch = (id, onDown, onUp) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); onDown(); });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); onUp(); });
      btn.addEventListener('mousedown', onDown);
      btn.addEventListener('mouseup', onUp);
      btn.addEventListener('mouseleave', onUp);
    };

    bindTouch('touch-left', () => this.touchSteer = -1, () => this.touchSteer = 0);
    bindTouch('touch-right', () => this.touchSteer = 1, () => this.touchSteer = 0);
    bindTouch('touch-gas', () => this.touchThrottle = 1, () => this.touchThrottle = 0);
    bindTouch('touch-brake', () => this.touchBrake = 1, () => this.touchBrake = 0);
    bindTouch('touch-handbrake', () => this.touchHandbrake = true, () => this.touchHandbrake = false);
    bindTouch('touch-nos', () => this.touchNitro = true, () => this.touchNitro = false);
    bindTouch('touch-horn',
      () => { if (this.onPlayHorn) this.onPlayHorn(); },
      () => { if (this.onStopHorn) this.onStopHorn(); }
    );

    // 3. Top Action Buttons
    document.getElementById('btn-cam-toggle').addEventListener('click', () => {
      if (this.onToggleCamera) this.onToggleCamera();
    });
    document.getElementById('btn-env-toggle').addEventListener('click', () => {
      if (this.onToggleEnv) this.onToggleEnv();
    });
    document.getElementById('btn-weather-toggle').addEventListener('click', () => {
      if (this.onToggleRain) this.onToggleRain();
    });
    document.getElementById('btn-pause').addEventListener('click', () => {
      this.togglePause();
    });

    // 4. Main Menu Buttons
    document.getElementById('btn-menu-career').addEventListener('click', () => {
      this.careerModal.classList.remove('hidden');
    });
    document.getElementById('btn-menu-freeroam').addEventListener('click', () => {
      this.mainMenu.classList.add('hidden');
      this.hudOverlay.classList.remove('hidden');
      if (this.onStartGame) this.onStartGame('freeroam');
    });
    document.getElementById('btn-menu-garage').addEventListener('click', () => {
      this.openGarage();
    });
    document.getElementById('btn-menu-daily').addEventListener('click', () => {
      this.dailyModal.classList.remove('hidden');
    });
    document.getElementById('btn-menu-howto').addEventListener('click', () => {
      this.howtoModal.classList.remove('hidden');
    });
    document.getElementById('btn-menu-settings').addEventListener('click', () => {
      this.settingsModal.classList.remove('hidden');
    });

    // 5. Modal Close Buttons
    const closeBtns = [
      { id: 'btn-close-garage', modal: this.garageModal },
      { id: 'btn-close-career', modal: this.careerModal },
      { id: 'btn-close-daily', modal: this.dailyModal },
      { id: 'btn-close-howto', modal: this.howtoModal },
      { id: 'btn-close-howto-bottom', modal: this.howtoModal },
      { id: 'btn-close-settings', modal: this.settingsModal },
      { id: 'btn-save-settings', modal: this.settingsModal }
    ];

    closeBtns.forEach(b => {
      const el = document.getElementById(b.id);
      if (el) el.addEventListener('click', () => b.modal.classList.add('hidden'));
    });

    // Garage Test Drive Button
    document.getElementById('btn-garage-testdrive').addEventListener('click', () => {
      this.garageModal.classList.add('hidden');
      this.mainMenu.classList.add('hidden');
      this.hudOverlay.classList.remove('hidden');
      if (this.onStartGame) this.onStartGame('freeroam');
    });

    // Pause Menu actions
    document.getElementById('btn-resume').addEventListener('click', () => {
      this.pauseModal.classList.add('hidden');
    });
    const btnRestart = document.getElementById('btn-pause-restart');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        this.pauseModal.classList.add('hidden');
        if (this.onResetVehicle) this.onResetVehicle();
      });
    }
    document.getElementById('btn-pause-garage').addEventListener('click', () => {
      this.pauseModal.classList.add('hidden');
      this.openGarage();
    });
    document.getElementById('btn-pause-menu').addEventListener('click', () => {
      this.pauseModal.classList.add('hidden');
      this.hudOverlay.classList.add('hidden');
      this.mainMenu.classList.remove('hidden');
    });

    // Settings listeners
    const trafficSel = document.getElementById('setting-traffic');
    if (trafficSel) {
      trafficSel.addEventListener('change', (e) => {
        if (this.onTrafficChange) this.onTrafficChange(e.target.value);
      });
    }
    const volumeSlider = document.getElementById('setting-volume');
    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        if (this.onVolumeChange) this.onVolumeChange(e.target.value / 100);
      });
    }
    const touchToggle = document.getElementById('setting-touch');
    if (touchToggle) {
      touchToggle.addEventListener('change', (e) => {
        const touchDiv = document.getElementById('touch-controls');
        if (touchDiv) touchDiv.style.display = e.target.checked ? 'flex' : 'none';
      });
    }

    // Ride Result Continue Button
    document.getElementById('btn-result-continue').addEventListener('click', () => {
      this.resultModal.classList.add('hidden');
    });

    // Garage Tab switching
    const tabBtns = document.querySelectorAll('.garage-tabs .tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.garage-content .tab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(`tab-${tabId}`).classList.add('active');
      });
    });

    // Garage Upgrades Buttons
    ['speed', 'accel', 'brakes', 'nitro'].forEach(type => {
      const btn = document.getElementById(`btn-up-${type}`);
      if (btn) {
        btn.addEventListener('click', () => {
          this.garage.buyUpgrade(type);
          this.updateGarageUI();
        });
      }
    });

    // Reset save button in settings
    document.getElementById('btn-reset-save').addEventListener('click', () => {
      if (confirm('Reset your money, garage upgrades and progress back to beginning?')) {
        this.garage.resetSave();
        this.updateGarageUI();
        this.showAlert('Game data reset to default!', '🔄', true);
      }
    });
  }

  openGarage() {
    this.updateGarageUI();
    this.garageModal.classList.remove('hidden');
  }

  togglePause() {
    if (this.hudOverlay.classList.contains('hidden')) return;
    this.pauseModal.classList.toggle('hidden');
  }

  updateGarageUI() {
    const s = this.garage.state;
    document.getElementById('garage-wallet-val').innerText = `₹${s.cash}`;
    document.getElementById('menu-wallet-val').innerText = `₹${s.cash}`;
    this.hudCash.innerText = `₹${s.cash}`;

    // Upgrades
    ['speed', 'accel', 'brakes', 'nitro'].forEach(type => {
      const lvl = s.upgrades[type];
      const maxLvl = this.garage.upgradeCatalog[type].maxLvl;
      const cost = this.garage.getUpgradeCost(type);

      const lvlEl = document.getElementById(`lvl-${type}`);
      const barEl = document.getElementById(`bar-${type}`);
      const btnEl = document.getElementById(`btn-up-${type}`);

      if (lvlEl) lvlEl.innerText = `Level ${lvl} / ${maxLvl}`;
      if (barEl) barEl.style.width = `${(lvl / maxLvl) * 100}%`;

      if (btnEl) {
        if (cost === null) {
          btnEl.innerText = 'MAX LEVEL';
          btnEl.disabled = true;
        } else {
          btnEl.innerText = `Upgrade (₹${cost})`;
          btnEl.disabled = (s.cash < cost);
        }
      }
    });

    this.renderGarageCatalog();
  }

  renderGarageCatalog() {
    const s = this.garage.state;

    // Skins Grid
    const skinsGrid = document.getElementById('skins-grid');
    if (skinsGrid) {
      skinsGrid.innerHTML = '';
      this.garage.skinsCatalog.forEach(item => {
        const isUnlocked = s.unlockedSkins.includes(item.id);
        const isSelected = (s.currentSkin === item.id);

        const card = document.createElement('div');
        card.className = `item-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="item-swatch" style="background: ${item.preview}; border: 3px solid ${item.roof};">🛺</div>
          <div class="item-name">${item.name}</div>
          <div class="item-price">${isSelected ? 'EQUIPPED' : (isUnlocked ? 'SELECT' : `₹${item.price}`)}</div>
        `;
        card.addEventListener('click', () => {
          this.garage.selectSkin(item.id);
          this.renderGarageCatalog();
        });
        skinsGrid.appendChild(card);
      });
    }

    // Decals Grid
    const decalsGrid = document.getElementById('decals-grid');
    if (decalsGrid) {
      decalsGrid.innerHTML = '';
      this.garage.decalsCatalog.forEach(item => {
        const isUnlocked = s.unlockedDecals.includes(item.id);
        const isSelected = (s.currentDecal === item.id);

        const card = document.createElement('div');
        card.className = `item-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="item-swatch" style="background: #222; color: #FFB800; font-size: 14px; font-weight: 800;">${item.name}</div>
          <div class="item-name">${item.tag}</div>
          <div class="item-price">${isSelected ? 'EQUIPPED' : (isUnlocked ? 'SELECT' : `₹${item.price}`)}</div>
        `;
        card.addEventListener('click', () => {
          this.garage.selectDecal(item.id);
          this.renderGarageCatalog();
        });
        decalsGrid.appendChild(card);
      });
    }

    // Horns Grid
    const hornsGrid = document.getElementById('horns-grid');
    if (hornsGrid) {
      hornsGrid.innerHTML = '';
      this.garage.hornsCatalog.forEach(item => {
        const isUnlocked = s.unlockedHorns.includes(item.id);
        const isSelected = (s.currentHorn === item.id);

        const card = document.createElement('div');
        card.className = `item-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
          <div class="item-swatch" style="background: #111;">🎺</div>
          <div class="item-name">${item.name}</div>
          <p style="font-size: 11px; color: #888;">${item.desc}</p>
          <div class="item-price">${isSelected ? 'ACTIVE' : (isUnlocked ? 'USE' : `₹${item.price}`)}</div>
        `;
        card.addEventListener('click', () => {
          this.garage.selectHorn(item.id);
          this.renderGarageCatalog();
        });
        hornsGrid.appendChild(card);
      });
    }
  }

  renderMissionsList() {
    const list = document.getElementById('missions-list');
    if (!list) return;
    list.innerHTML = '';

    this.missionManager.missions.forEach(m => {
      const card = document.createElement('div');
      card.className = 'mission-card';
      card.innerHTML = `
        <div class="mission-info">
          <h4>${m.title}</h4>
          <p>${m.desc}</p>
          <div class="mission-rewards">
            <span>⏱️ ${m.timeLimitSec}s</span>
            <span>💰 ₹${m.reward}</span>
          </div>
        </div>
        <button class="desi-btn btn-start-mission">START RIDE 🛺</button>
      `;

      card.querySelector('button').addEventListener('click', () => {
        this.careerModal.classList.add('hidden');
        this.mainMenu.classList.add('hidden');
        this.hudOverlay.classList.remove('hidden');
        if (this.onStartGame) this.onStartGame('mission', m.id);
      });

      list.appendChild(card);
    });
  }

  renderDailyList() {
    const list = document.getElementById('daily-list');
    if (!list) return;
    list.innerHTML = '';

    this.missionManager.dailyChallenges.forEach(c => {
      const card = document.createElement('div');
      card.className = 'mission-card';
      const pct = Math.min(100, Math.round((c.progress / c.target) * 100));
      card.innerHTML = `
        <div class="mission-info">
          <h4>${c.title}</h4>
          <p>${c.desc}</p>
          <div class="uc-progress" style="width: 200px; height: 6px; margin: 6px 0;">
            <div class="uc-progress-fill" style="width: ${pct}%;"></div>
          </div>
          <div class="mission-rewards">
            <span>Progress: ${pct}%</span>
            <span>💰 ₹${c.reward}</span>
          </div>
        </div>
        <span style="font-weight: 800; color: ${c.completed ? '#00E676' : '#FFB800'};">
          ${c.completed ? 'COMPLETED ✅' : 'IN PROGRESS ⏳'}
        </span>
      `;
      list.appendChild(card);
    });
  }

  showAlert(text, icon = '🚨', isReward = false) {
    if (this.alertTimeout) clearTimeout(this.alertTimeout);
    this.alertIcon.innerText = icon;
    this.alertText.innerText = text;
    this.alertBanner.className = `alert-banner ${isReward ? 'reward-banner' : ''}`;
    this.alertBanner.classList.remove('hidden');

    this.alertTimeout = setTimeout(() => {
      this.alertBanner.classList.add('hidden');
    }, 4000);
  }

  showDialog(data) {
    this.dialogAvatar.innerText = data.avatar;
    this.dialogName.innerText = data.name;
    this.dialogMsg.innerText = data.msg;
    this.dialogBubble.classList.remove('hidden');

    setTimeout(() => {
      this.dialogBubble.classList.add('hidden');
    }, 4500);
  }

  showRideResult(data) {
    document.getElementById('res-base-fare').innerText = `₹${data.baseFare}`;
    document.getElementById('res-dist').innerText = `${data.distKm} km`;
    document.getElementById('res-tip').innerText = `+₹${data.tip}`;
    document.getElementById('res-total').innerText = `₹${data.total}`;
    this.resultModal.classList.remove('hidden');
  }

  // Update HUD elements every frame
  updateHUD(speedKmh, health, nitro, isReversing, passengerSystem, activeDestination, playerPos, playerHeading, trafficVehicles) {
    this.updateKeyboardInputs();

    // 1. Speedometer Needle & Display
    const absSpeed = Math.abs(Math.round(speedKmh));
    this.hudSpeed.innerText = absSpeed;

    // Gear computation
    if (isReversing) {
      this.hudGear.innerText = 'R';
      this.hudGear.style.background = '#D32F2F';
    } else if (absSpeed < 3) {
      this.hudGear.innerText = '1';
      this.hudGear.style.background = '#0D7B3E';
    } else if (absSpeed < 25) {
      this.hudGear.innerText = '2';
      this.hudGear.style.background = '#0D7B3E';
    } else if (absSpeed < 45) {
      this.hudGear.innerText = '3';
      this.hudGear.style.background = '#0D7B3E';
    } else {
      this.hudGear.innerText = '4';
      this.hudGear.style.background = '#FF6F00';
    }

    // SVG radial speedo fill
    const maxSpeed = 90;
    const dashLength = (Math.min(maxSpeed, absSpeed) / maxSpeed) * 300;
    this.speedoFill.style.strokeDasharray = `${dashLength} 408`;

    // Gauges
    this.hudNitroFill.style.width = `${nitro}%`;
    this.hudHealthFill.style.width = `${health}%`;

    // 2. Active Ride Fare Meter
    if (passengerSystem && passengerSystem.hasActiveRide) {
      this.rideCard.classList.remove('hidden');
      this.meterFare.innerText = `₹${passengerSystem.tripFare.toFixed(1)}`;
      this.meterDist.innerText = `${passengerSystem.tripDistanceKm.toFixed(2)} km`;
      this.rideDestName.innerText = passengerSystem.currentDestination.name;
    } else {
      this.rideCard.classList.add('hidden');
    }

    // 3. 3D Navigation Arrow calculation
    if (activeDestination) {
      this.navArrowContainer.style.opacity = '1';
      const dx = activeDestination.x - playerPos.x;
      const dz = activeDestination.z - playerPos.z;
      const dist = Math.round(Math.sqrt(dx * dx + dz * dz));
      this.navDistLabel.innerText = `${dist}m`;

      // Angle to target relative to world North
      const targetAngle = Math.atan2(dx, dz);
      // Relative bearing to player's current yaw heading
      const relativeAngle = targetAngle - playerHeading;
      const deg = -(relativeAngle * (180 / Math.PI));
      this.navArrow.style.transform = `rotate(${deg}deg)`;
    } else {
      this.navArrowContainer.style.opacity = '0';
    }

    // 4. Draw 2D Radar Minimap
    this.renderMinimap(playerPos, playerHeading, activeDestination, trafficVehicles);
  }

  // Draw circular radar minimap
  renderMinimap(playerPos, heading, destination, trafficVehicles) {
    const ctx = this.minimapCtx;
    const w = this.minimapCanvas.width;
    const h = this.minimapCanvas.height;
    const center = w / 2;
    const mapScale = 0.45; // meters to canvas pixels

    ctx.clearRect(0, 0, w, h);

    // Save and rotate canvas so player always faces UP or North is UP
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(heading); // Rotating world with player heading facing UP
    ctx.translate(-playerPos.x * mapScale, -playerPos.z * mapScale);

    // Draw Main Road Grid (MG Road & Expressway)
    ctx.strokeStyle = '#37474F';
    ctx.lineWidth = 14 * mapScale;
    ctx.beginPath();
    // MG Road (North-South)
    ctx.moveTo(0, -180 * mapScale);
    ctx.lineTo(0, 180 * mapScale);
    // Expressway (East-West)
    ctx.moveTo(-180 * mapScale, 0);
    ctx.lineTo(180 * mapScale, 0);
    ctx.stroke();

    // Secondary streets
    ctx.lineWidth = 8 * mapScale;
    ctx.beginPath();
    ctx.moveTo(-150 * mapScale, -90 * mapScale);
    ctx.lineTo(150 * mapScale, -90 * mapScale);
    ctx.moveTo(-150 * mapScale, 90 * mapScale);
    ctx.lineTo(150 * mapScale, 90 * mapScale);
    ctx.stroke();

    // Draw Traffic Vehicles as tiny colored dots
    if (trafficVehicles) {
      trafficVehicles.forEach(v => {
        const tx = v.mesh.position.x * mapScale;
        const tz = v.mesh.position.z * mapScale;
        ctx.fillStyle = (v.type === 'bus') ? '#FF5252' : '#FFD54F';
        ctx.beginPath();
        ctx.arc(tx, tz, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    // Draw Destination Beacon
    if (destination) {
      const dx = destination.x * mapScale;
      const dz = destination.z * mapScale;
      ctx.fillStyle = '#00E676';
      ctx.beginPath();
      ctx.arc(dx, dz, 5.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}
