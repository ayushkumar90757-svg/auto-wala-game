// AUTO WALA: Vehicle Driving Physics, Upgrades & Collision Engine
import * as THREE from 'three';

export class VehiclePhysics {
  constructor(rickshaw) {
    this.rickshaw = rickshaw;

    // Position & Orientation
    this.position = this.rickshaw.root.position;
    this.rotation = this.rickshaw.root.rotation;
    this.heading = 0; // Yaw angle in radians

    // Dynamic State
    this.speed = 0; // Speed in m/s
    this.speedKmh = 0;
    this.steerAngle = 0; // Front fork angle
    this.steerInput = 0; // -1 (left) to 1 (right)
    this.throttleInput = 0; // 0 to 1
    this.brakeInput = 0; // 0 to 1
    this.isHandbrake = false;
    this.isReversing = false;

    // Vehicle Health & Nitro
    this.health = 100;
    this.maxHealth = 100;
    this.isDead = false;
    this.onGameOver = null;
    this.nitro = 100;
    this.maxNitro = 100;
    this.isNitroActive = false;

    // Upgradable Specs
    this.specs = {
      maxSpeedKmh: 48,      // Base top speed (Upgrade Level 1: 48, Level 5: 85)
      accelForce: 9.5,       // m/s^2
      brakeForce: 24.0,      // m/s^2
      reverseMaxSpeedKmh: 18,
      steerSpeed: 3.2,
      maxSteerAngle: 0.62,   // ~35 degrees max front wheel turn
      drag: 0.985,           // Air resistance
      friction: 0.96         // Rolling tyre friction
    };

    // Collision Bounding Box (simple oriented or spherical check)
    this.colliderRadius = 1.35;
    this.collisionObstacles = [];
    this.trafficVehicles = [];

    // Collision callback
    this.onCollision = null;
  }

  // Apply garage upgrade levels (1 to 5)
  applyUpgrades(upgrades) {
    // Speed Level: 1 -> 48, 2 -> 56, 3 -> 65, 4 -> 74, 5 -> 85 km/h
    const speedTable = [48, 56, 65, 74, 85];
    const sLvl = Math.max(1, Math.min(5, upgrades.speed || 1));
    this.specs.maxSpeedKmh = speedTable[sLvl - 1];

    // Accel Level: 1 -> 9.5, 5 -> 16.0
    const aLvl = Math.max(1, Math.min(5, upgrades.accel || 1));
    this.specs.accelForce = 8.5 + aLvl * 1.5;

    // Brakes Level: 1 -> 24.0, 5 -> 40.0
    const bLvl = Math.max(1, Math.min(5, upgrades.brakes || 1));
    this.specs.brakeForce = 20.0 + bLvl * 4.0;
  }

  setInputs({ steer, throttle, brake, handbrake, nitro }) {
    this.steerInput = steer;
    this.throttleInput = throttle;
    this.brakeInput = brake;
    this.isHandbrake = handbrake;
    this.isNitroActive = nitro && this.nitro > 5;
  }

  update(dt) {
    if (this.isDead) return;
    dt = Math.min(0.05, Math.max(0.001, dt)); // Clamp dt for stability

    // 1. Steering Dynamics
    // High responsiveness at low speed, gentle at high speed
    const speedRatio = Math.min(1.0, Math.abs(this.speedKmh) / 60);
    const targetMaxSteer = this.specs.maxSteerAngle * (1.0 - speedRatio * 0.45);
    const targetSteer = this.steerInput * targetMaxSteer;

    // Smooth steering interpolation
    this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1.0, this.specs.steerSpeed * 3.5 * dt);

    // 2. Nitro Handling
    let boostMultiplier = 1.0;
    if (this.isNitroActive && this.throttleInput > 0) {
      boostMultiplier = 1.6;
      this.nitro = Math.max(0, this.nitro - 25 * dt);
    } else {
      // Passive nitro recharge
      this.nitro = Math.min(this.maxNitro, this.nitro + 12 * dt);
    }

    // 3. Acceleration & Braking Dynamics
    const maxSpeedMs = (this.specs.maxSpeedKmh * (this.isNitroActive ? 1.3 : 1.0)) / 3.6;
    const maxRevSpeedMs = this.specs.reverseMaxSpeedKmh / 3.6;

    if (this.throttleInput > 0) {
      if (this.speed >= -0.5) {
        // Forward driving
        this.isReversing = false;
        const availableAccel = this.specs.accelForce * boostMultiplier * (1.0 - (this.speed / maxSpeedMs) * 0.75);
        this.speed += availableAccel * this.throttleInput * dt;
        if (this.speed > maxSpeedMs) this.speed = maxSpeedMs;
      } else {
        // Braking while going backward
        this.speed += this.specs.brakeForce * dt;
      }
    } else if (this.brakeInput > 0) {
      if (this.speed > 0.8) {
        // Braking while going forward
        this.speed -= this.specs.brakeForce * this.brakeInput * dt;
        if (this.speed < 0) this.speed = 0;
      } else {
        // Reverse gear
        this.isReversing = true;
        this.speed -= (this.specs.accelForce * 0.6) * this.brakeInput * dt;
        if (this.speed < -maxRevSpeedMs) this.speed = -maxRevSpeedMs;
      }
    } else {
      // Coasting: air drag and tyre rolling resistance
      this.speed *= Math.pow(this.specs.drag, dt * 60);
      this.speed *= Math.pow(this.specs.friction, dt * 60);
      if (Math.abs(this.speed) < 0.08) this.speed = 0;
    }

    // Handbrake application
    if (this.isHandbrake) {
      this.speed *= Math.pow(0.85, dt * 60);
    }

    // 4. Yaw Turn Angular Rate
    // Wheelbase L = 1.9m; turn rate = (v / L) * tan(steer)
    const wheelbase = 1.85;
    let turnRate = (this.speed / wheelbase) * Math.tan(this.steerAngle);

    // Drifting bonus on handbrake turn!
    if (this.isHandbrake && Math.abs(this.speed) > 3) {
      turnRate *= 1.7;
    }

    this.heading += turnRate * dt;
    this.rotation.y = this.heading;

    // 5. Compute Linear Velocity & Update Position
    const vx = Math.sin(this.heading) * this.speed;
    const vz = Math.cos(this.heading) * this.speed;

    const oldX = this.position.x;
    const oldZ = this.position.z;

    this.position.x += vx * dt;
    this.position.z += vz * dt;

    // World boundary guard
    const bound = 270;
    if (this.position.x > bound) { this.position.x = bound; this.speed = -this.speed * 0.2; }
    if (this.position.x < -bound) { this.position.x = -bound; this.speed = -this.speed * 0.2; }
    if (this.position.z > bound) { this.position.z = bound; this.speed = -this.speed * 0.2; }
    if (this.position.z < -bound) { this.position.z = -bound; this.speed = -this.speed * 0.2; }

    this.speedKmh = this.speed * 3.6;

    // 6. Collision Check with Static Obstacles (buildings, barriers, lamp posts)
    this.checkCollisions(oldX, oldZ);

    if (this.health <= 0 && !this.isDead) {
      this.isDead = true;
      this.speed = 0;
      this.speedKmh = 0;
      if (this.onGameOver) this.onGameOver();
    }

    // 7. Update 3D Rickshaw Visuals
    const isBraking = (this.brakeInput > 0 && this.speed > 0.5) || this.isHandbrake;
    this.rickshaw.updateVisuals(this.steerAngle, this.speedKmh, dt, isBraking);
  }

  // Set static collision boxes (buildings, flyover columns, etc.)
  setObstacles(obstacles) {
    this.collisionObstacles = obstacles;
  }

  // Set dynamic traffic vehicles
  setTrafficVehicles(vehicles) {
    this.trafficVehicles = vehicles;
  }

  // Collision detection and response
  checkCollisions(oldX, oldZ) {
    const px = this.position.x;
    const pz = this.position.z;
    const radius = this.colliderRadius;

    // Check with static obstacles (AABB boxes)
    for (let i = 0; i < this.collisionObstacles.length; i++) {
      const box = this.collisionObstacles[i];
      if (px + radius > box.minX && px - radius < box.maxX &&
          pz + radius > box.minZ && pz - radius < box.maxZ) {

        // Collision occurred! Bounce back
        const impactSpeed = Math.abs(this.speedKmh);
        this.position.x = oldX;
        this.position.z = oldZ;
        this.speed = -this.speed * 0.35; // rebound

        if (impactSpeed > 15) {
          const dmg = Math.min(25, Math.floor(impactSpeed * 0.3));
          this.health = Math.max(0, this.health - dmg);
          if (this.onCollision) {
            this.onCollision({ type: 'obstacle', impactSpeed, damage: dmg });
          }
        }
        return;
      }
    }

    // Check with dynamic traffic vehicles
    for (let i = 0; i < this.trafficVehicles.length; i++) {
      const v = this.trafficVehicles[i];
      const dx = px - v.mesh.position.x;
      const dz = pz - v.mesh.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const combinedRadius = radius + v.radius;

      if (dist < combinedRadius) {
        // Traffic collision!
        const impactSpeed = Math.abs(this.speedKmh - v.speedKmh);
        this.position.x = oldX;
        this.position.z = oldZ;
        this.speed = -this.speed * 0.4;

        if (impactSpeed > 10) {
          const dmg = Math.min(30, Math.floor(impactSpeed * 0.4));
          this.health = Math.max(0, this.health - dmg);
          if (this.onCollision) {
            this.onCollision({ type: 'vehicle', vehicleType: v.type, impactSpeed, damage: dmg });
          }
        }
        return;
      }
    }
  }

  // Reset auto to a safe road location (e.g. if stuck or player presses R)
  reset(x = 0, z = 0, heading = 0) {
    this.position.set(x, 0, z);
    this.heading = heading;
    this.rotation.y = heading;
    this.speed = 0;
    this.speedKmh = 0;
    this.steerAngle = 0;
    this.isDead = false;
    this.rickshaw.chassis.rotation.set(0, 0, 0);
  }

  repair() {
    this.health = this.maxHealth;
    this.isDead = false;
  }
}
