// AUTO WALA: Passenger Pickup, Hailing System, Live Fare Meter & Dropoff
import * as THREE from 'three';
import { sound } from './audio.js';

export class PassengerSystem {
  constructor(scene, city, rickshaw, onRideComplete, onDialog) {
    this.scene = scene;
    this.city = city;
    this.rickshaw = rickshaw;
    this.onRideComplete = onRideComplete;
    this.onDialog = onDialog;

    // Ride State
    this.hasActiveRide = false;
    this.currentPassenger = null;
    this.currentDestination = null;
    this.tripDistanceKm = 0;
    this.tripFare = 30; // ₹30 base fare
    this.tripDurationSec = 0;
    this.lastPosition = null;
    this.crashesDuringTrip = 0;

    // 3D Visual Beacons
    this.pickupZoneMesh = null;
    this.dropoffZoneMesh = null;
    this.hailingPassengerMesh = null;

    // Indian Passenger Profiles
    this.passengerProfiles = [
      {
        name: 'Ramesh Uncle',
        avatar: '👨🏽',
        pickupDialog: '“Bhaiya, Railway Station jaldi chalo! Train chhoot jayegi!”',
        dropDialog: '“Shabash beta! Ye lo tumhara kiraya aur chai ke paise.”',
        destKey: 'railway'
      },
      {
        name: 'Pooja (College Student)',
        avatar: '👩🏽',
        pickupDialog: '“Bhaiya, Bapu Bazaar chaloge? Meter se hi chalna haan!”',
        dropDialog: '“Thank you bhaiya! Ekdum safe chalate ho aap.”',
        destKey: 'bazaar'
      },
      {
        name: 'Dr. Verma',
        avatar: '👨🏻‍⚕️',
        pickupDialog: '“Emergency hai bhaiya, Apollo Hospital jaldi pahunchaiye!”',
        dropDialog: '“Bahut badhiya! Aapne time bacha liya.”',
        destKey: 'hospital'
      },
      {
        name: 'Sharma Ji',
        avatar: '👴🏽',
        pickupDialog: '“Chai Adda chalo bhai, subah ki kadak chai peeni hai!”',
        dropDialog: '“Ye lo bhaiya, poore chhutte hain.”',
        destKey: 'chai'
      },
      {
        name: 'Tourist Mike',
        avatar: '🧔🏼',
        pickupDialog: '“Namaste bhaiya! Take me to Gandhi Chowk Heritage, please!”',
        dropDialog: '“Incredible India! Auto rickshaw ride was amazing!”',
        destKey: 'chowk'
      },
      {
        name: 'Sunita Aunty',
        avatar: '🧕🏽',
        pickupDialog: '“Beta, Metro Station Gate 2 chalna hai, theek se chalana.”',
        dropDialog: '“Jeete raho beta, khub tarakki karo!”',
        destKey: 'metro'
      }
    ];

    // Roadside Pickup Waiting Spots
    this.pickupSpots = [
      { x: 13.5, z: -35 },
      { x: -13.5, z: 25 },
      { x: 13.5, z: 85 },
      { x: -13.5, z: -110 },
      { x: 30, z: 12.5 },
      { x: -50, z: -12.5 }
    ];

    this.createMarkers();
    this.spawnNextWaitingPassenger();
  }

  createMarkers() {
    // 1. Pickup Zone Halo (Pulsing Yellow Cylinder)
    const pGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.25, 24);
    const pMat = new THREE.MeshBasicMaterial({
      color: 0xFFD600,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });
    this.pickupZoneMesh = new THREE.Mesh(pGeo, pMat);
    this.pickupZoneMesh.position.set(0, 0.15, 0);
    this.scene.add(this.pickupZoneMesh);

    // 2. Dropoff Zone Halo (Pulsing Green Cylinder + Tall Light Beam)
    const dGeo = new THREE.CylinderGeometry(4.0, 4.0, 0.25, 24);
    const dMat = new THREE.MeshBasicMaterial({
      color: 0x00E676,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    this.dropoffZoneMesh = new THREE.Mesh(dGeo, dMat);
    this.dropoffZoneMesh.position.set(0, 0.15, 0);
    this.dropoffZoneMesh.visible = false;
    this.scene.add(this.dropoffZoneMesh);

    // Tall checkpoint laser beam above dropoff
    const beamGeo = new THREE.CylinderGeometry(0.3, 0.3, 30, 12);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x00E676,
      transparent: true,
      opacity: 0.45
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.y = 15;
    this.dropoffZoneMesh.add(beam);

    // 3. Waiting Roadside 3D Passenger Model
    this.hailingPassengerMesh = this.buildHailingHuman();
    this.scene.add(this.hailingPassengerMesh);
  }

  buildHailingHuman() {
    const group = new THREE.Group();
    const clothesMat = new THREE.MeshStandardMaterial({ color: 0x3F51B5, roughness: 0.7 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x8D5524, roughness: 0.8 });

    // Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.65, 0.25), clothesMat);
    torso.position.y = 1.1;
    group.add(torso);

    // Legs
    const legGeo = new THREE.BoxGeometry(0.16, 0.75, 0.18);
    const leftLeg = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x212121 }));
    leftLeg.position.set(-0.1, 0.4, 0);
    group.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeo, new THREE.MeshStandardMaterial({ color: 0x212121 }));
    rightLeg.position.set(0.1, 0.4, 0);
    group.add(rightLeg);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 12), skinMat);
    head.position.y = 1.6;
    group.add(head);

    // Raised Waving Arm
    const armGeo = new THREE.BoxGeometry(0.1, 0.55, 0.1);
    const arm = new THREE.Mesh(armGeo, skinMat);
    arm.position.set(0.28, 1.45, 0);
    arm.rotation.z = -1.1;
    group.add(arm);

    return group;
  }

  // Spawn a waiting roadside passenger
  spawnNextWaitingPassenger() {
    if (this.hasActiveRide) return;

    // Pick random waiting spot
    const spot = this.pickupSpots[Math.floor(Math.random() * this.pickupSpots.length)];
    const profile = this.passengerProfiles[Math.floor(Math.random() * this.passengerProfiles.length)];

    this.currentPassenger = {
      ...profile,
      pickupX: spot.x,
      pickupZ: spot.z,
      destination: this.city.landmarks[profile.destKey] || this.city.landmarks.railway
    };

    // Position pickup halo and human model
    this.pickupZoneMesh.position.set(spot.x, 0.15, spot.z);
    this.pickupZoneMesh.visible = true;

    this.hailingPassengerMesh.position.set(spot.x > 0 ? spot.x + 1.2 : spot.x - 1.2, 0, spot.z);
    this.hailingPassengerMesh.visible = true;

    this.dropoffZoneMesh.visible = false;
  }

  // Update loop: checks pickup, runs fare meter, checks dropoff
  update(dt, playerPos, playerSpeedKmh) {
    const time = performance.now() * 0.003;

    // Pulsing halo animation
    if (this.pickupZoneMesh && this.pickupZoneMesh.visible) {
      const s = 1.0 + Math.sin(time * 3) * 0.1;
      this.pickupZoneMesh.scale.set(s, 1, s);
    }
    if (this.dropoffZoneMesh && this.dropoffZoneMesh.visible) {
      const s = 1.0 + Math.sin(time * 4) * 0.12;
      this.dropoffZoneMesh.scale.set(s, 1, s);
    }

    if (!this.hasActiveRide) {
      // 1. Check if player enters pickup zone and slows down
      if (this.currentPassenger) {
        const dx = playerPos.x - this.currentPassenger.pickupX;
        const dz = playerPos.z - this.currentPassenger.pickupZ;
        const dist = Math.sqrt(dx * dx + dz * dz);

        // Player is inside pickup circle and stopped / slowing below 12 km/h
        if (dist < 4.0 && Math.abs(playerSpeedKmh) < 14) {
          this.startRide(playerPos);
        }
      }
    } else {
      // 2. Active Ride: Update Live Fare Meter
      this.tripDurationSec += dt;

      if (this.lastPosition) {
        const dX = playerPos.x - this.lastPosition.x;
        const dZ = playerPos.z - this.lastPosition.z;
        const movedMeters = Math.sqrt(dX * dX + dZ * dZ);
        this.tripDistanceKm += movedMeters / 1000;
      }
      this.lastPosition = { x: playerPos.x, z: playerPos.z };

      // Fare Calculation: Base ₹30 + ₹15 per km + ₹1 per 6s
      this.tripFare = 30 + (this.tripDistanceKm * 15) + (this.tripDurationSec / 6);

      // 3. Check if reached destination dropoff zone
      const dest = this.currentDestination;
      const dxDest = playerPos.x - dest.x;
      const dzDest = playerPos.z - dest.z;
      const distToDest = Math.sqrt(dxDest * dxDest + dzDest * dzDest);

      if (distToDest < 4.5 && Math.abs(playerSpeedKmh) < 12) {
        this.completeRide();
      }
    }
  }

  startRide(playerPos) {
    this.hasActiveRide = true;
    this.lastPosition = { x: playerPos.x, z: playerPos.z };
    this.tripDistanceKm = 0;
    this.tripFare = 30;
    this.tripDurationSec = 0;
    this.crashesDuringTrip = 0;

    this.currentDestination = this.currentPassenger.destination;

    // Hide pickup markers and show passenger in rickshaw seat
    this.pickupZoneMesh.visible = false;
    this.hailingPassengerMesh.visible = false;
    this.rickshaw.setPassengerVisible(true);

    // Show dropoff green marker
    this.dropoffZoneMesh.position.set(this.currentDestination.x, 0.15, this.currentDestination.z);
    this.dropoffZoneMesh.visible = true;

    sound.playCoinJingle();

    // Trigger dialogue
    if (this.onDialog) {
      this.onDialog({
        avatar: this.currentPassenger.avatar,
        name: this.currentPassenger.name,
        msg: this.currentPassenger.pickupDialog,
        dest: this.currentDestination.name
      });
    }
  }

  recordCrash() {
    if (this.hasActiveRide) {
      this.crashesDuringTrip++;
      if (this.onDialog) {
        this.onDialog({
          avatar: this.currentPassenger.avatar,
          name: this.currentPassenger.name,
          msg: '“Arrey bhaiya aaram se! Haddi-pasli todoge kya?!”',
          dest: this.currentDestination.name
        });
      }
    }
  }

  completeRide() {
    this.hasActiveRide = false;
    this.rickshaw.setPassengerVisible(false);
    this.dropoffZoneMesh.visible = false;

    // Calculate Safe Driving Tip
    let tip = 0;
    if (this.crashesDuringTrip === 0) {
      tip = 40 + Math.floor(Math.random() * 25); // ₹40 to ₹65 tip!
    } else if (this.crashesDuringTrip === 1) {
      tip = 15;
    }

    const totalFare = Math.round(this.tripFare) + tip;
    sound.playCoinJingle();

    if (this.onRideComplete) {
      this.onRideComplete({
        passenger: this.currentPassenger.name,
        baseFare: 30,
        distKm: this.tripDistanceKm.toFixed(1),
        fare: Math.round(this.tripFare),
        tip: tip,
        total: totalFare,
        crashes: this.crashesDuringTrip
      });
    }

    // Trigger departure dialogue
    if (this.onDialog) {
      this.onDialog({
        avatar: this.currentPassenger.avatar,
        name: this.currentPassenger.name,
        msg: this.currentPassenger.dropDialog,
        dest: 'Completed'
      });
    }

    // Prepare next roadside passenger after 3 seconds
    setTimeout(() => {
      this.spawnNextWaitingPassenger();
    }, 3500);
  }

  getActiveDestination() {
    if (this.hasActiveRide && this.currentDestination) {
      return this.currentDestination;
    } else if (this.currentPassenger) {
      return {
        x: this.currentPassenger.pickupX,
        z: this.currentPassenger.pickupZ,
        name: `Passenger: ${this.currentPassenger.name}`
      };
    }
    return null;
  }
}
