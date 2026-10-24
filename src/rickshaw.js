// AUTO WALA: Detailed 3D Bajaj RE Indian Auto Rickshaw Model
import * as THREE from 'three';
import { textureFactory } from './textures.js';

export class Rickshaw {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.chassis = new THREE.Group(); // Tilts on sharp turns
    this.root.add(this.chassis);

    // Dynamic parts
    this.frontFork = new THREE.Group();
    this.frontWheel = null;
    this.rearLeftWheel = null;
    this.rearRightWheel = null;
    this.headlight = null;
    this.headlightLight = null;
    this.taillightLeft = null;
    this.taillightRight = null;
    this.underglowLight = null;
    this.passengerMesh = null;
    this.mudflapDecalMesh = null;

    // Materials reference for garage customization
    this.bodyMaterial = null;
    this.roofMaterial = null;

    // Auto dimensions
    this.width = 1.35;
    this.length = 2.65;
    this.height = 1.75;
    this.wheelRadius = 0.28;

    this.buildModel();
    this.scene.add(this.root);
  }

  buildModel() {
    // 1. Lower Body Tub / Chassis
    // Authentic Bajaj Green (or customizable)
    this.bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x0D7B3E, // Bajaj Green
      metalness: 0.35,
      roughness: 0.45
    });

    // Yellow Roof Canvas Material
    this.roofMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFB800, // Haldi Yellow
      roughness: 0.6,
      metalness: 0.1
    });

    const blackPlasticMat = new THREE.MeshStandardMaterial({
      color: 0x1A1A1A,
      roughness: 0.7
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC,
      metalness: 0.85,
      roughness: 0.2
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xE0F7FA,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.05
    });

    // Base floor pan
    const floorGeo = new THREE.BoxGeometry(1.28, 0.12, 2.3);
    const floor = new THREE.Mesh(floorGeo, blackPlasticMat);
    floor.position.set(0, 0.28, 0);
    floor.castShadow = true;
    floor.receiveShadow = true;
    this.chassis.add(floor);

    // Lower Body Tub (Rear side panels & back wall)
    const backWallGeo = new THREE.BoxGeometry(1.26, 0.7, 0.08);
    const backWall = new THREE.Mesh(backWallGeo, this.bodyMaterial);
    backWall.position.set(0, 0.65, -1.05);
    backWall.castShadow = true;
    this.chassis.add(backWall);

    // Left and Right lower side skirts (cut out for passenger entry)
    const skirtGeo = new THREE.BoxGeometry(0.06, 0.45, 1.1);
    const leftSkirt = new THREE.Mesh(skirtGeo, this.bodyMaterial);
    leftSkirt.position.set(-0.62, 0.52, -0.45);
    leftSkirt.castShadow = true;
    this.chassis.add(leftSkirt);

    const rightSkirt = new THREE.Mesh(skirtGeo, this.bodyMaterial);
    rightSkirt.position.set(0.62, 0.52, -0.45);
    rightSkirt.castShadow = true;
    this.chassis.add(rightSkirt);

    // Front Nose / Cowl (curved wedge)
    const noseGeo = new THREE.BoxGeometry(0.85, 0.6, 0.65);
    const nose = new THREE.Mesh(noseGeo, this.bodyMaterial);
    nose.position.set(0, 0.58, 0.75);
    nose.castShadow = true;
    this.chassis.add(nose);

    // Front Mudguard
    const frontGuardGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.24, 16, 1, false, 0, Math.PI);
    const frontGuard = new THREE.Mesh(frontGuardGeo, this.bodyMaterial);
    frontGuard.rotation.x = Math.PI / 2;
    frontGuard.position.set(0, 0.36, 1.05);
    this.frontFork.add(frontGuard);

    // Front Steering Fork & Handlebars
    const forkStemGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.65, 8);
    const forkStem = new THREE.Mesh(forkStemGeo, chromeMat);
    forkStem.position.set(0, 0.65, 1.05);
    this.frontFork.add(forkStem);

    // Handlebar horizontal crossbar
    const barGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8);
    const bar = new THREE.Mesh(barGeo, chromeMat);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(0, 0.95, 0.88);
    this.frontFork.add(bar);

    // Rubber Grips
    const gripGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.12, 8);
    const leftGrip = new THREE.Mesh(gripGeo, blackPlasticMat);
    leftGrip.rotation.z = Math.PI / 2;
    leftGrip.position.set(-0.32, 0.95, 0.88);
    this.frontFork.add(leftGrip);

    const rightGrip = new THREE.Mesh(gripGeo, blackPlasticMat);
    rightGrip.rotation.z = Math.PI / 2;
    rightGrip.position.set(0.32, 0.95, 0.88);
    this.frontFork.add(rightGrip);

    // Handlebar Mirrors
    const mirrorStemGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.18, 6);
    const mirrorLeftStem = new THREE.Mesh(mirrorStemGeo, chromeMat);
    mirrorLeftStem.position.set(-0.35, 1.05, 0.88);
    mirrorLeftStem.rotation.z = -0.3;
    this.frontFork.add(mirrorLeftStem);

    const mirrorHeadGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.02, 12);
    const mirrorLeftHead = new THREE.Mesh(mirrorHeadGeo, blackPlasticMat);
    mirrorLeftHead.rotation.x = Math.PI / 2;
    mirrorLeftHead.position.set(-0.39, 1.14, 0.88);
    this.frontFork.add(mirrorLeftHead);

    const mirrorRightStem = new THREE.Mesh(mirrorStemGeo, chromeMat);
    mirrorRightStem.position.set(0.35, 1.05, 0.88);
    mirrorRightStem.rotation.z = 0.3;
    this.frontFork.add(mirrorRightStem);

    const mirrorRightHead = new THREE.Mesh(mirrorHeadGeo, blackPlasticMat);
    mirrorRightHead.rotation.x = Math.PI / 2;
    mirrorRightHead.position.set(0.39, 1.14, 0.88);
    this.frontFork.add(mirrorRightHead);

    // Front Round Bajaj Headlight
    const headlightBezelGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16);
    const headlightBezel = new THREE.Mesh(headlightBezelGeo, chromeMat);
    headlightBezel.rotation.x = Math.PI / 2;
    headlightBezel.position.set(0, 0.65, 1.1);
    this.frontFork.add(headlightBezel);

    const headlightLensGeo = new THREE.CircleGeometry(0.1, 16);
    const headlightLensMat = new THREE.MeshBasicMaterial({ color: 0xFFFEE0 });
    this.headlight = new THREE.Mesh(headlightLensGeo, headlightLensMat);
    this.headlight.position.set(0, 0.65, 1.145);
    this.frontFork.add(this.headlight);

    // Headlight SpotLight (casts beam at night)
    this.headlightLight = new THREE.SpotLight(0xFFF9C4, 1.6, 35, Math.PI / 5, 0.3, 1);
    this.headlightLight.position.set(0, 0.65, 1.2);
    const lightTarget = new THREE.Object3D();
    lightTarget.position.set(0, 0, 10);
    this.chassis.add(lightTarget);
    this.headlightLight.target = lightTarget;
    this.chassis.add(this.headlightLight);

    // Add frontFork to chassis
    this.chassis.add(this.frontFork);

    // 2. Windshield Frame & Glass
    const framePillarGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.8, 8);
    const leftPillar = new THREE.Mesh(framePillarGeo, blackPlasticMat);
    leftPillar.position.set(-0.55, 1.2, 0.45);
    leftPillar.rotation.x = 0.15;
    this.chassis.add(leftPillar);

    const rightPillar = new THREE.Mesh(framePillarGeo, blackPlasticMat);
    rightPillar.position.set(0.55, 1.2, 0.45);
    rightPillar.rotation.x = 0.15;
    this.chassis.add(rightPillar);

    const glassGeo = new THREE.PlaneGeometry(1.08, 0.65);
    const windshield = new THREE.Mesh(glassGeo, glassMat);
    windshield.position.set(0, 1.2, 0.45);
    windshield.rotation.x = 0.15;
    this.chassis.add(windshield);

    // Single Windshield Wiper
    const wiperArmGeo = new THREE.BoxGeometry(0.015, 0.35, 0.01);
    const wiper = new THREE.Mesh(wiperArmGeo, blackPlasticMat);
    wiper.rotation.z = 0.4;
    wiper.position.set(0.08, 1.15, 0.48);
    this.chassis.add(wiper);

    // 3. Canvas Roof Canopy & Metal Roll Cage Pillars
    const rearLeftPillar = new THREE.Mesh(framePillarGeo, blackPlasticMat);
    rearLeftPillar.position.set(-0.6, 1.2, -1.05);
    this.chassis.add(rearLeftPillar);

    const rearRightPillar = new THREE.Mesh(framePillarGeo, blackPlasticMat);
    rearRightPillar.position.set(0.6, 1.2, -1.05);
    this.chassis.add(rearRightPillar);

    // Yellow Roof Canopy (curved top)
    const roofShape = new THREE.BoxGeometry(1.32, 0.14, 2.05);
    const roof = new THREE.Mesh(roofShape, this.roofMaterial);
    roof.position.set(0, 1.62, -0.22);
    roof.castShadow = true;
    this.chassis.add(roof);

    // Roof front sun-visor (classic Indian rickshaw visor slope)
    const visorGeo = new THREE.BoxGeometry(1.28, 0.15, 0.25);
    const visor = new THREE.Mesh(visorGeo, this.roofMaterial);
    visor.position.set(0, 1.54, 0.72);
    visor.rotation.x = 0.45;
    this.chassis.add(visor);

    // 4. Seats & Interior
    const driverSeatGeo = new THREE.BoxGeometry(0.55, 0.22, 0.4);
    const driverSeatMat = new THREE.MeshStandardMaterial({ color: 0x222, roughness: 0.8 });
    const driverSeat = new THREE.Mesh(driverSeatGeo, driverSeatMat);
    driverSeat.position.set(0, 0.48, 0.25);
    driverSeat.castShadow = true;
    this.chassis.add(driverSeat);

    // Passenger Back Bench Seat
    const passengerSeatGeo = new THREE.BoxGeometry(1.18, 0.22, 0.55);
    const passengerSeat = new THREE.Mesh(passengerSeatGeo, driverSeatMat);
    passengerSeat.position.set(0, 0.48, -0.72);
    passengerSeat.castShadow = true;
    this.chassis.add(passengerSeat);

    const passengerBackrestGeo = new THREE.BoxGeometry(1.18, 0.45, 0.12);
    const backrest = new THREE.Mesh(passengerBackrestGeo, driverSeatMat);
    backrest.position.set(0, 0.82, -0.98);
    this.chassis.add(backrest);

    // 5. Wheels (1 Front, 2 Rear)
    this.frontWheel = this.createWheel();
    this.frontWheel.position.set(0, 0.28, 1.05);
    this.frontFork.add(this.frontWheel);

    this.rearLeftWheel = this.createWheel();
    this.rearLeftWheel.position.set(-0.64, 0.28, -0.75);
    this.chassis.add(this.rearLeftWheel);

    this.rearRightWheel = this.createWheel();
    this.rearRightWheel.position.set(0.64, 0.28, -0.75);
    this.chassis.add(this.rearRightWheel);

    // 6. Rear Mudflaps & "HORN OK PLEASE" Decal
    const mudflapGeo = new THREE.PlaneGeometry(0.8, 0.22);
    const mudflapMat = new THREE.MeshStandardMaterial({
      map: textureFactory.createDecalTexture('hornok'),
      roughness: 0.8
    });
    this.mudflapDecalMesh = new THREE.Mesh(mudflapGeo, mudflapMat);
    this.mudflapDecalMesh.position.set(0, 0.28, -1.1);
    this.mudflapDecalMesh.rotation.y = Math.PI;
    this.chassis.add(this.mudflapDecalMesh);

    // Number Plate
    const plateGeo = new THREE.PlaneGeometry(0.48, 0.14);
    const plateMat = new THREE.MeshBasicMaterial({
      map: textureFactory.createNumberPlateTexture('DL 1R AW 2026')
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.position.set(0, 0.52, -1.1);
    plate.rotation.y = Math.PI;
    this.chassis.add(plate);

    // 7. Rear Tail / Brake Lights (Pair)
    const tailGeo = new THREE.BoxGeometry(0.12, 0.08, 0.04);
    const tailMat = new THREE.MeshBasicMaterial({ color: 0x990000 });
    this.taillightLeft = new THREE.Mesh(tailGeo, tailMat);
    this.taillightLeft.position.set(-0.5, 0.65, -1.09);
    this.chassis.add(this.taillightLeft);

    this.taillightRight = new THREE.Mesh(tailGeo, tailMat.clone());
    this.taillightRight.position.set(0.5, 0.65, -1.09);
    this.chassis.add(this.taillightRight);

    // 8. Underglow Neon Light (Garage feature)
    this.underglowLight = new THREE.PointLight(0x00E5FF, 0, 4); // off by default
    this.underglowLight.position.set(0, 0.1, 0);
    this.chassis.add(this.underglowLight);

    // 9. Passenger 3D Character (Hidden until passenger picked up)
    this.passengerMesh = this.buildPassengerCharacter();
    this.passengerMesh.position.set(0.2, 0.6, -0.65);
    this.passengerMesh.visible = false;
    this.chassis.add(this.passengerMesh);

    // 10. Desi Roof Carrier Rack (Luggage on top)
    const rackBarGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.15, 6);
    const rack1 = new THREE.Mesh(rackBarGeo, chromeMat);
    rack1.rotation.z = Math.PI / 2;
    rack1.position.set(0, 1.74, -0.6);
    this.chassis.add(rack1);

    const rack2 = new THREE.Mesh(rackBarGeo, chromeMat);
    rack2.rotation.z = Math.PI / 2;
    rack2.position.set(0, 1.74, 0.1);
    this.chassis.add(rack2);
  }

  // Create authentic rickshaw wheel with rubber tread and steel hubcap
  createWheel() {
    const wheelGroup = new THREE.Group();

    // Black Rubber Tyre
    const tyreGeo = new THREE.CylinderGeometry(this.wheelRadius, this.wheelRadius, 0.15, 18);
    const tyreMat = new THREE.MeshStandardMaterial({
      color: 0x1A1A1A,
      roughness: 0.85
    });
    const tyre = new THREE.Mesh(tyreGeo, tyreMat);
    tyre.rotation.z = Math.PI / 2;
    tyre.castShadow = true;
    wheelGroup.add(tyre);

    // Silver Central Hub
    const rimGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.16, 12);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xCCCCCC,
      metalness: 0.7,
      roughness: 0.3
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.z = Math.PI / 2;
    wheelGroup.add(rim);

    return wheelGroup;
  }

  // Simple procedural passenger model that sits inside the rear bench
  buildPassengerCharacter() {
    const pGroup = new THREE.Group();

    // Torso (Kurta / shirt)
    const torsoGeo = new THREE.BoxGeometry(0.35, 0.45, 0.25);
    const torsoMat = new THREE.MeshStandardMaterial({ color: 0xE65100, roughness: 0.7 });
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.y = 0.22;
    pGroup.add(torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x8D5524, roughness: 0.8 });
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 0.58;
    pGroup.add(head);

    // Hair / Turban
    const hairGeo = new THREE.SphereGeometry(0.15, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 0.62;
    pGroup.add(hair);

    return pGroup;
  }

  // Apply garage customization skins
  applySkin(skinId) {
    const skins = {
      delhi: { body: 0x0D7B3E, roof: 0xFFB800 },    // Delhi Green & Yellow
      mumbai: { body: 0x1C1C1C, roof: 0xFFD600 },   // Mumbai Kaali Peeli
      ev: { body: 0x00B0FF, roof: 0x00E676 },       // Electric Cyan-Green
      royal: { body: 0xD84315, roof: 0xFFD700 },    // Royal Saffron Gold
      bollywood: { body: 0xE91E63, roof: 0xFFEB3B },// Bollywood Pink
      shadow: { body: 0x11161B, roof: 0x263238 }    // Midnight Stealth
    };

    const s = skins[skinId] || skins.delhi;
    if (this.bodyMaterial) this.bodyMaterial.color.setHex(s.body);
    if (this.roofMaterial) this.roofMaterial.color.setHex(s.roof);
  }

  // Apply custom rear decal
  applyDecal(decalId) {
    if (this.mudflapDecalMesh) {
      this.mudflapDecalMesh.material.map = textureFactory.createDecalTexture(decalId);
      this.mudflapDecalMesh.material.needsUpdate = true;
    }
  }

  // Set underglow color & intensity
  setUnderglow(enabled, colorHex = 0x00E5FF) {
    if (this.underglowLight) {
      this.underglowLight.color.setHex(colorHex);
      this.underglowLight.intensity = enabled ? 2.5 : 0;
    }
  }

  // Update steering fork angle, wheel roll rotation, chassis lean tilt, brake lights
  updateVisuals(steerAngle, speedKmh, dt, isBraking = false) {
    // 1. Steering fork rotation
    if (this.frontFork) {
      this.frontFork.rotation.y = steerAngle;
    }

    // 2. Wheel rolling rotation
    const dist = (speedKmh * 1000 / 3600) * dt;
    const wheelRot = dist / this.wheelRadius;

    if (this.frontWheel) this.frontWheel.rotation.x += wheelRot;
    if (this.rearLeftWheel) this.rearLeftWheel.rotation.x += wheelRot;
    if (this.rearRightWheel) this.rearRightWheel.rotation.x += wheelRot;

    // 3. Indian Rickshaw Leaning Physics!
    // Centrifugal lean: when turning left, chassis leans to right
    const targetRoll = steerAngle * Math.min(1.0, Math.abs(speedKmh) / 45) * 0.18;
    this.chassis.rotation.z += (targetRoll - this.chassis.rotation.z) * 0.15;

    // Subtle pitch on acceleration / braking
    const targetPitch = isBraking ? 0.05 : 0;
    this.chassis.rotation.x += (targetPitch - this.chassis.rotation.x) * 0.15;

    // 4. Tail / Brake lights glow bright red when braking
    const tailColor = isBraking ? 0xFF1744 : 0x770000;
    if (this.taillightLeft) this.taillightLeft.material.color.setHex(tailColor);
    if (this.taillightRight) this.taillightRight.material.color.setHex(tailColor);
  }

  // Toggle passenger presence in backseat
  setPassengerVisible(visible) {
    if (this.passengerMesh) {
      this.passengerMesh.visible = visible;
    }
  }
}
