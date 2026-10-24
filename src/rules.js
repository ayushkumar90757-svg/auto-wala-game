// AUTO WALA: Traffic Rules, Traffic Signals & Challan Enforcement
import { sound } from './audio.js';

export class TrafficRules {
  constructor(city, onChallanIssued) {
    this.city = city;
    this.onChallanIssued = onChallanIssued;

    // Traffic signal states
    // 'ns_green': North-South Green, East-West Red
    // 'ns_yellow': North-South Yellow, East-West Red
    // 'ew_green': East-West Green, North-South Red
    // 'ew_yellow': East-West Yellow, North-South Red
    this.signalState = 'ns_green';
    this.timer = 0;
    this.durations = {
      ns_green: 14.0,
      ns_yellow: 3.0,
      ew_green: 14.0,
      ew_yellow: 3.0
    };

    // Violation cooldown timers
    this.redLightCooldown = 0;
    this.speedingCooldown = 0;
  }

  update(dt, playerPos, playerSpeedKmh) {
    this.timer += dt;
    this.redLightCooldown = Math.max(0, this.redLightCooldown - dt);
    this.speedingCooldown = Math.max(0, this.speedingCooldown - dt);

    // 1. Advance Traffic Light Cycles
    const currentDuration = this.durations[this.signalState];
    if (this.timer >= currentDuration) {
      this.timer = 0;
      switch (this.signalState) {
        case 'ns_green': this.signalState = 'ns_yellow'; break;
        case 'ns_yellow': this.signalState = 'ew_green'; break;
        case 'ew_green': this.signalState = 'ew_yellow'; break;
        case 'ew_yellow': this.signalState = 'ns_green'; break;
      }
      this.updateVisualSignals();
    }

    // 2. Check Player Violations
    this.checkRedLightViolation(playerPos, playerSpeedKmh);
    this.checkSpeedingViolation(playerPos, playerSpeedKmh);
  }

  // Update visual light colors on the 3D traffic signal poles in the city
  updateVisualSignals() {
    const isNSGreen = (this.signalState === 'ns_green');
    const isNSYellow = (this.signalState === 'ns_yellow');
    const isEWGreen = (this.signalState === 'ew_green');
    const isEWYellow = (this.signalState === 'ew_yellow');

    this.city.trafficLights.forEach(light => {
      const isNS = (light.id === 0 || light.id === 1);
      const isRed = isNS ? (!isNSGreen && !isNSYellow) : (!isEWGreen && !isEWYellow);
      const isYel = isNS ? isNSYellow : isEWYellow;
      const isGrn = isNS ? isNSGreen : isEWGreen;

      if (light.redLens) {
        light.redLens.material.color.setHex(isRed ? 0xFF1744 : 0x220000);
        if (light.redLens.material.emissive) {
          light.redLens.material.emissive.setHex(isRed ? 0xFF1744 : 0x000000);
          light.redLens.material.emissiveIntensity = isRed ? 2.5 : 0;
        }
      }
      if (light.yelLens) {
        light.yelLens.material.color.setHex(isYel ? 0xFFEA00 : 0x221800);
        if (light.yelLens.material.emissive) {
          light.yelLens.material.emissive.setHex(isYel ? 0xFFEA00 : 0x000000);
          light.yelLens.material.emissiveIntensity = isYel ? 2.5 : 0;
        }
      }
      if (light.grnLens) {
        light.grnLens.material.color.setHex(isGrn ? 0x00E676 : 0x002208);
        if (light.grnLens.material.emissive) {
          light.grnLens.material.emissive.setHex(isGrn ? 0x00E676 : 0x000000);
          light.grnLens.material.emissiveIntensity = isGrn ? 2.5 : 0;
        }
      }
    });
  }

  // Get detailed signal information for HUD indicators and driver alerts
  getSignalStatus(pos, speedKmh) {
    const isNS = Math.abs(pos.z) > Math.abs(pos.x);
    let distToStopLine = 999;
    let approachingIntersection = false;

    // Check distance to center intersection at (0, 0)
    if (isNS) {
      if (Math.abs(pos.x) < 14 && Math.abs(pos.z) < 75) {
        approachingIntersection = true;
        if (pos.z < -14) {
          distToStopLine = -18 - pos.z;
        } else if (pos.z > 14) {
          distToStopLine = pos.z - 18;
        } else {
          distToStopLine = 0;
        }
      }
    } else {
      if (Math.abs(pos.z) < 14 && Math.abs(pos.x) < 75) {
        approachingIntersection = true;
        if (pos.x < -14) {
          distToStopLine = -18 - pos.x;
        } else if (pos.x > 14) {
          distToStopLine = pos.x - 18;
        } else {
          distToStopLine = 0;
        }
      }
    }

    let color = 'GREEN';
    let instruction = 'INTERSECTION CLEAR - GO';
    let badgeClass = 'sig-green';

    if (isNS) {
      if (this.signalState === 'ns_yellow') {
        color = 'YELLOW';
        instruction = 'SLOW DOWN - PREPARE TO STOP';
        badgeClass = 'sig-yellow';
      } else if (this.signalState === 'ew_green' || this.signalState === 'ew_yellow') {
        color = 'RED';
        instruction = 'RED SIGNAL - STOP BEHIND LINE';
        badgeClass = 'sig-red';
      }
    } else {
      if (this.signalState === 'ew_yellow') {
        color = 'YELLOW';
        instruction = 'SLOW DOWN - PREPARE TO STOP';
        badgeClass = 'sig-yellow';
      } else if (this.signalState === 'ns_green' || this.signalState === 'ns_yellow') {
        color = 'RED';
        instruction = 'RED SIGNAL - STOP BEHIND LINE';
        badgeClass = 'sig-red';
      }
    }

    const distMeters = Math.max(0, Math.round(distToStopLine));
    const needBrakeHint = (approachingIntersection && color !== 'GREEN' && distMeters < 45 && distMeters > 3 && speedKmh > 16);

    // Speed limits in Bapu Bazaar and Hospital
    const inBazaar = (pos.x > 8 && pos.x < 32 && pos.z > 30 && pos.z < 95);
    const inHospital = (pos.x > -70 && pos.x < -30 && pos.z > 45 && pos.z < 95);
    const speedLimit = (inBazaar || inHospital) ? 40 : 60;
    const isSpeeding = speedKmh > (speedLimit + 3);

    return {
      approachingIntersection,
      color,
      instruction,
      distMeters,
      needBrakeHint,
      speedLimit,
      isSpeeding,
      badgeClass
    };
  }

  // Query if a route is currently facing a Red light
  isRed(direction) {
    if (direction === 'ns') {
      return (this.signalState === 'ew_green' || this.signalState === 'ew_yellow');
    } else {
      return (this.signalState === 'ns_green' || this.signalState === 'ns_yellow');
    }
  }

  // Check if player entered the center intersection during Red light
  checkRedLightViolation(pos, speedKmh) {
    if (this.redLightCooldown > 0 || Math.abs(speedKmh) < 8) return;

    // Center intersection bounding area: X [-12, 12], Z [-12, 12]
    const inIntersection = (Math.abs(pos.x) < 11 && Math.abs(pos.z) < 11);
    if (!inIntersection) return;

    // Check if player was driving North-South or East-West
    const isDrivingNS = Math.abs(pos.z) > Math.abs(pos.x);
    const facingRed = isDrivingNS ? this.isRed('ns') : this.isRed('ew');

    if (facingRed) {
      this.redLightCooldown = 6.0; // 6s cooldown before next challan
      sound.playChallanSiren();

      if (this.onChallanIssued) {
        this.onChallanIssued({
          type: 'red_light',
          fine: 200,
          msg: '🚨 TRAFFIC CHALLAN: Red Light Jumped! -₹200'
        });
      }
    }
  }

  // Check if player exceeds 45 km/h in crowded Bapu Bazaar or Hospital silence zones
  checkSpeedingViolation(pos, speedKmh) {
    if (this.speedingCooldown > 0) return;

    // Bapu Bazaar Market Zone (X: 10 to 30, Z: 35 to 90)
    const inBazaar = (pos.x > 8 && pos.x < 32 && pos.z > 30 && pos.z < 95);
    // Hospital Silence Zone (X: -65 to -35, Z: 50 to 90)
    const inHospital = (pos.x > -70 && pos.x < -30 && pos.z > 45 && pos.z < 95);

    if ((inBazaar || inHospital) && speedKmh > 48) {
      this.speedingCooldown = 8.0;
      sound.playChallanSiren();

      const zoneName = inBazaar ? 'Bapu Bazaar Crowded Zone' : 'Hospital Silence Zone';
      if (this.onChallanIssued) {
        this.onChallanIssued({
          type: 'speeding',
          fine: 150,
          msg: `⚠️ SPEEDING CHALLAN: Over 45 km/h in ${zoneName}! -₹150`
        });
      }
    }
  }
}
