// AUTO WALA: Indian City Life - Main Game Entry & Game Loop
import * as THREE from 'three';
import { Rickshaw } from './rickshaw.js';
import { VehiclePhysics } from './physics.js';
import { IndianCity } from './city.js';
import { TrafficManager } from './traffic.js';
import { TrafficRules } from './rules.js';
import { PassengerSystem } from './passengers.js';
import { GarageManager } from './garage.js';
import { MissionManager } from './missions.js';
import { UIManager } from './ui.js';
import { sound } from './audio.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.clock = new THREE.Clock();

    // Scene & Renderer
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
    this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.0035);

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 800);
    this.cameraModes = ['chase', 'far_chase', 'cockpit', 'hood'];
    this.currentCameraIdx = 0;
    this.cameraMode = this.cameraModes[this.currentCameraIdx];
    this.gameState = 'menu'; // 'menu' | 'playing' | 'paused' | 'gameover'
    this.menuCameraAngle = 0;
    this.graphicsQuality = 'medium';

    // Environment Lighting
    this.isNight = false;
    this.isRaining = false;
    this.setupLighting();
    this.setupRain();

    // Initialize City & Auto Rickshaw
    this.city = new IndianCity(this.scene);
    this.rickshaw = new Rickshaw(this.scene);
    this.physics = new VehiclePhysics(this.rickshaw);
    this.physics.setObstacles(this.city.collisionBoxes);

    // Initial Auto placement (Near Gandhi Chowk on MG Road)
    this.physics.reset(4.5, -30, 0);

    // AI Traffic Manager
    this.traffic = new TrafficManager(this.scene, this.city);
    this.physics.setTrafficVehicles(this.traffic.getTrafficVehicles());

    // Game Managers
    this.missionManager = new MissionManager((mission) => {
      this.garage.addCash(mission.reward);
      this.ui.showAlert(`🎉 Mission Accomplished! Earned ₹${mission.reward}`, '🏆', true);
    });

    this.garage = new GarageManager(this.rickshaw, this.physics, (state) => {
      if (this.ui) this.ui.updateGarageUI();
    });

    this.rules = new TrafficRules(this.city, (challan) => {
      this.garage.deductCash(challan.fine);
      this.missionManager.recordViolation();
      this.ui.showAlert(challan.msg, '🚨', false);
    });

    this.passengers = new PassengerSystem(
      this.scene,
      this.city,
      this.rickshaw,
      (result) => {
        // Ride complete callback
        this.garage.addCash(result.total);
        this.ui.showRideResult(result);
        if (this.missionManager.activeMission) {
          this.missionManager.completeActiveMission();
        }
      },
      (dialog) => {
        // Dialog callback
        this.ui.showDialog(dialog);
      }
    );

    // Collision Handler
    this.physics.onCollision = (col) => {
      sound.playCrashBump();
      this.passengers.recordCrash();
      if (col.impactSpeed > 20) {
        this.ui.showAlert(`💥 Crash Impact! Auto Damaged: -₹40 repair`, '⚠️', false);
        this.garage.deductCash(40);
      }
    };

    // Game Over Handler
    this.physics.onGameOver = () => {
      this.gameState = 'gameover';
      sound.forceSilence();
      sound.playCrashBump();
      this.ui.showGameOver();
      this.ui.showAlert('💥 Auto Totaled! Repair & respawn.', '🚨', false);
    };

    // UI Manager
    this.ui = new UIManager(this.garage, this.missionManager);
    this.setupUICallbacks();

    // Resize listener
    window.addEventListener('resize', () => this.onWindowResize());

    // Start loop
    this.animate();
  }

  setupLighting() {
    // Ambient Sky Light
    this.ambientLight = new THREE.HemisphereLight(0xFFFFFF, 0x444444, 0.7);
    this.scene.add(this.ambientLight);

    // Sun Directional Light
    this.sunLight = new THREE.DirectionalLight(0xFFF3E0, 1.2);
    this.sunLight.position.set(60, 100, 40);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 250;
    this.sunLight.shadow.camera.left = -90;
    this.sunLight.shadow.camera.right = 90;
    this.sunLight.shadow.camera.top = 90;
    this.sunLight.shadow.camera.bottom = -90;
    this.scene.add(this.sunLight);
  }

  setupRain() {
    // Rain Particles
    const rainCount = 1800;
    const rainGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(rainCount * 3);

    for (let i = 0; i < rainCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 120;
      positions[i + 1] = Math.random() * 40;
      positions[i + 2] = (Math.random() - 0.5) * 120;
    }

    rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const rainMat = new THREE.PointsMaterial({
      color: 0x90CAF9,
      size: 0.25,
      transparent: true,
      opacity: 0.6
    });

    this.rainParticles = new THREE.Points(rainGeo, rainMat);
    this.rainParticles.visible = false;
    this.scene.add(this.rainParticles);
  }

  toggleDayNight() {
    this.isNight = !this.isNight;
    if (this.isNight) {
      // Night Setting
      this.scene.background.setHex(0x060911);
      this.scene.fog.color.setHex(0x060911);
      this.ambientLight.intensity = 0.15;
      this.sunLight.intensity = 0.1;
      this.rickshaw.headlightLight.intensity = 3.2;
      this.city.setNightMode(true);
      document.getElementById('btn-env-toggle').innerText = '🌙';
    } else {
      // Day Setting
      this.scene.background.setHex(0x87CEEB);
      this.scene.fog.color.setHex(0x87CEEB);
      this.ambientLight.intensity = 0.7;
      this.sunLight.intensity = 1.2;
      this.rickshaw.headlightLight.intensity = 0.0;
      this.city.setNightMode(false);
      document.getElementById('btn-env-toggle').innerText = '☀️';
    }
  }

  toggleRain() {
    this.isRaining = !this.isRaining;
    this.rainParticles.visible = this.isRaining;
    document.getElementById('btn-weather-toggle').innerText = this.isRaining ? '🌧️' : '🌤️';
  }

  switchCamera() {
    this.currentCameraIdx = (this.currentCameraIdx + 1) % this.cameraModes.length;
    this.cameraMode = this.cameraModes[this.currentCameraIdx];
  }

  setupUICallbacks() {
    this.ui.onStartGame = (mode, missionId) => {
      this.gameState = 'playing';
      sound.startEngine();

      if (mode === 'mission' && missionId) {
        const m = this.missionManager.startMission(missionId);
        document.getElementById('hud-mission-badge').innerText = 'CAREER MISSION';
        document.getElementById('hud-mission-text').innerText = m.title;

        // Position auto near mission start spot
        const landmark = this.city.landmarks[m.pickupKey];
        if (landmark) {
          this.physics.reset(landmark.x > 0 ? landmark.x - 4 : landmark.x + 4, landmark.z, 0);
        }
        this.passengers.setMissionPassenger(m.pickupKey, m.destKey, m.title);
      } else {
        document.getElementById('hud-mission-badge').innerText = 'FREE ROAM';
        document.getElementById('hud-mission-text').innerText = 'Drive freely & pick up roadside passengers!';
        this.missionManager.activeMission = null;
        this.passengers.reset();
      }
    };

    this.ui.onPauseGame = () => {
      this.gameState = 'paused';
      sound.forceSilence();
    };

    this.ui.onResumeGame = () => {
      this.gameState = 'playing';
      sound.startEngine();
    };

    this.ui.onRestartGame = () => {
      this.physics.repair();
      if (this.missionManager.activeMission) {
        const m = this.missionManager.activeMission;
        const landmark = this.city.landmarks[m.pickupKey];
        this.physics.reset(landmark ? (landmark.x > 0 ? landmark.x - 4 : landmark.x + 4) : 4.5, landmark ? landmark.z : -30, 0);
        this.passengers.setMissionPassenger(m.pickupKey, m.destKey, m.title);
      } else {
        this.physics.reset(4.5, -30, 0);
        this.passengers.reset();
      }
      this.gameState = 'playing';
      sound.startEngine();
      this.ui.showAlert('Auto Rickshaw Repaired & Ready!', '🛺', true);
    };

    this.ui.onQuitToMenu = () => {
      this.gameState = 'menu';
      sound.forceSilence();
      this.physics.reset(4.5, -30, 0);
      this.missionManager.activeMission = null;
    };

    this.ui.onToggleCamera = () => this.switchCamera();
    this.ui.onToggleEnv = () => this.toggleDayNight();
    this.ui.onToggleRain = () => this.toggleRain();
    this.ui.onResetVehicle = () => {
      this.physics.reset(4.5, this.physics.position.z, 0);
      this.ui.showAlert('Auto Rickshaw Position Reset!', '🛺', true);
    };

    this.ui.onPlayHorn = () => {
      if (this.gameState === 'playing') {
        sound.playHorn(this.garage.state.currentHorn);
      }
    };
    this.ui.onStopHorn = () => {
      sound.stopHorn();
    };
    this.ui.onTrafficChange = (density) => {
      this.traffic.setDensity(density);
      this.physics.setTrafficVehicles(this.traffic.getTrafficVehicles());
      this.ui.showAlert(`Traffic density set to ${density.toUpperCase()}`, '🚦', true);
    };
    this.ui.onGraphicsChange = (quality) => {
      this.applyGraphicsSettings(quality);
    };
    this.ui.onVolumeChange = (vol) => {
      sound.setVolume(vol);
    };
  }

  applyGraphicsSettings(quality = 'medium') {
    this.graphicsQuality = quality;

    if (quality === 'low') {
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));
      this.renderer.shadowMap.enabled = false;
      if (this.sunLight) this.sunLight.castShadow = false;
      this.traffic.setDensity('low');
    } else if (quality === 'high') {
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      if (this.sunLight) {
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.set(1024, 1024);
      }
      this.traffic.setDensity('high');
    } else {
      // Medium
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.15));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.BasicShadowMap;
      if (this.sunLight) {
        this.sunLight.castShadow = true;
        this.sunLight.shadow.mapSize.set(512, 512);
      }
      this.traffic.setDensity('medium');
    }

    this.physics.setTrafficVehicles(this.traffic.getTrafficVehicles());
  }

  updateCamera(dt) {
    const pos = this.physics.position;
    const heading = this.physics.heading;
    const speed = this.physics.speed;

    if (this.cameraMode === 'chase') {
      // 3rd Person Smooth Chase Camera Behind Rickshaw
      const followDist = 5.8 + Math.min(2.5, Math.abs(speed) * 0.12);
      const camHeight = 2.4;

      const targetX = pos.x - Math.sin(heading) * followDist;
      const targetZ = pos.z - Math.cos(heading) * followDist;
      const targetY = pos.y + camHeight;

      // Smooth lag damping
      this.camera.position.x += (targetX - this.camera.position.x) * Math.min(1.0, 10 * dt);
      this.camera.position.z += (targetZ - this.camera.position.z) * Math.min(1.0, 10 * dt);
      this.camera.position.y += (targetY - this.camera.position.y) * Math.min(1.0, 10 * dt);

      // Look at point slightly above auto nose
      const lookAtX = pos.x + Math.sin(heading) * 2;
      const lookAtZ = pos.z + Math.cos(heading) * 2;
      this.camera.lookAt(lookAtX, pos.y + 1.2, lookAtZ);
    } else if (this.cameraMode === 'far_chase') {
      // High-Angle Cinematic Camera
      const followDist = 11.0;
      const targetX = pos.x - Math.sin(heading) * followDist;
      const targetZ = pos.z - Math.cos(heading) * followDist;
      this.camera.position.set(targetX, pos.y + 6.0, targetZ);
      this.camera.lookAt(pos.x, pos.y + 1.0, pos.z);
    } else if (this.cameraMode === 'cockpit') {
      // 1st Person Cockpit View seated on driver stool looking out windshield!
      this.camera.position.set(pos.x, pos.y + 1.25, pos.z + 0.35);
      const forwardX = pos.x + Math.sin(heading) * 12;
      const forwardZ = pos.z + Math.cos(heading) * 12;
      this.camera.lookAt(forwardX, pos.y + 1.1, forwardZ);
    } else if (this.cameraMode === 'hood') {
      // Front Bumper / Road Cam
      this.camera.position.set(pos.x + Math.sin(heading) * 1.4, pos.y + 0.6, pos.z + Math.cos(heading) * 1.4);
      const forwardX = pos.x + Math.sin(heading) * 15;
      const forwardZ = pos.z + Math.cos(heading) * 15;
      this.camera.lookAt(forwardX, pos.y + 0.6, forwardZ);
    }

    // Shadow light follows player
    this.sunLight.position.set(pos.x + 50, 80, pos.z + 40);
    this.sunLight.target.position.set(pos.x, pos.y, pos.z);
    this.sunLight.target.updateMatrixWorld();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const dt = Math.min(0.04, this.clock.getDelta());

    // Update input states before physics to avoid 1-frame input lag
    this.ui.updateInputs();

    let signalStatus = null;
    let promptText = null;

    if (this.gameState === 'playing') {
      // 1. Update Vehicle Physics with user inputs
      this.physics.setInputs(this.ui.inputs);
      this.physics.update(dt);

      // 2. Update Engine Audio Synthesizer
      sound.updateEngine(this.physics.speedKmh, this.ui.inputs.throttle, this.physics.isReversing);

      // 3. Update AI Traffic
      this.traffic.update(
        dt,
        this.physics.position,
        this.physics.speedKmh,
        (dir) => this.rules.isRed(dir)
      );

      // 4. Update Traffic Rules (Signals & Challans)
      this.rules.update(dt, this.physics.position, this.physics.speedKmh);
      signalStatus = this.rules.getSignalStatus(this.physics.position, this.physics.speedKmh);

      // 5. Update Passenger Rides
      this.passengers.update(dt, this.physics.position, this.physics.speedKmh);
      promptText = this.passengers.promptText;

      // 6. Update Career Missions
      const missionStatus = this.missionManager.update(dt, this.physics.speedKmh, this.ui.inputs.handbrake);
      if (missionStatus && missionStatus.status === 'failed') {
        this.ui.showAlert(`❌ ${missionStatus.reason}`, '⚠️', false);
      }

      // Camera follows vehicle
      this.updateCamera(dt);
    } else if (this.gameState === 'menu') {
      // Cinematic idle showcase camera rotating slowly around auto
      this.menuCameraAngle += dt * 0.25;
      const camDist = 7.5;
      const px = this.physics.position.x;
      const pz = this.physics.position.z;
      this.camera.position.set(
        px + Math.sin(this.menuCameraAngle) * camDist,
        2.5,
        pz + Math.cos(this.menuCameraAngle) * camDist
      );
      this.camera.lookAt(px, 1.2, pz);
    }

    // 7. Update Rain Particles
    if (this.isRaining) {
      const posAttr = this.rainParticles.geometry.attributes.position;
      const pArr = posAttr.array;
      const px = this.physics.position.x;
      const pz = this.physics.position.z;

      for (let i = 1; i < pArr.length; i += 3) {
        pArr[i] -= 35 * dt;
        if (pArr[i] < 0) {
          pArr[i] = 30 + Math.random() * 10;
          pArr[i - 1] = px + (Math.random() - 0.5) * 80;
          pArr[i + 1] = pz + (Math.random() - 0.5) * 80;
        }
      }
      posAttr.needsUpdate = true;
    }

    // 8. Update UI & HUD (only passes active destination when gameplay is active)
    const activeDest = this.gameState === 'playing' ? this.passengers.getActiveDestination() : null;
    this.ui.updateHUD(
      this.physics.speedKmh,
      this.physics.health,
      this.physics.nitro,
      this.physics.isReversing,
      this.passengers,
      activeDest,
      this.physics.position,
      this.physics.heading,
      this.traffic.getTrafficVehicles(),
      signalStatus,
      promptText
    );

    // 9. Render 3D Scene
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

// Launch Game on Window Load
window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
