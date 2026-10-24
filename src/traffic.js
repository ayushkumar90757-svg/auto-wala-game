// AUTO WALA: Dynamic Indian AI Traffic System (Buses, Cars, Trucks, Autos & Bikes)
import * as THREE from 'three';

export class TrafficManager {
  constructor(scene, city) {
    this.scene = scene;
    this.city = city;
    this.vehicles = [];
    this.trafficDensity = 'medium'; // 'low', 'medium', 'high'

    this.routes = [
      // Route 0: MG Road Southbound (Lane X = 4.5, Z from -180 to +180)
      { id: 'mg_south', startX: 4.5, startZ: -175, endZ: 175, dx: 0, dz: 1, rotY: 0 },
      // Route 1: MG Road Northbound (Lane X = -4.5, Z from +180 to -180)
      { id: 'mg_north', startX: -4.5, startZ: 175, endZ: -175, dx: 0, dz: -1, rotY: Math.PI },
      // Route 2: Expressway Eastbound (Lane Z = 4.5, X from -175 to +175)
      { id: 'exp_east', startX: -175, startZ: 4.5, endX: 175, dx: 1, dz: 0, rotY: Math.PI / 2 },
      // Route 3: Expressway Westbound (Lane Z = -4.5, X from +175 to -175)
      { id: 'exp_west', startX: 175, startZ: -4.5, endX: -175, dx: -1, dz: 0, rotY: -Math.PI / 2 }
    ];

    this.spawnTraffic();
  }

  setDensity(density) {
    this.trafficDensity = density;
    this.clearTraffic();
    this.spawnTraffic();
  }

  clearTraffic() {
    this.vehicles.forEach(v => {
      this.scene.remove(v.mesh);
    });
    this.vehicles = [];
  }

  spawnTraffic() {
    const counts = { low: 8, medium: 16, high: 26 };
    const count = counts[this.trafficDensity] || 16;
    const types = ['bus', 'sedan', 'suv', 'truck', 'bike', 'auto'];

    for (let i = 0; i < count; i++) {
      const type = types[i % types.length];
      const route = this.routes[i % this.routes.length];
      const progress = (i / count) + (Math.random() * 0.05);

      const vehicle = this.createVehicleMesh(type);
      vehicle.route = route;
      vehicle.type = type;
      vehicle.speed = (7 + Math.random() * 5); // 25 to 45 km/h
      vehicle.baseSpeed = vehicle.speed;
      vehicle.speedKmh = vehicle.speed * 3.6;
      vehicle.blockedTimer = 0;

      // Position along route
      if (route.dz !== 0) {
        const span = route.endZ - route.startZ;
        const currentZ = route.startZ + (span * progress);
        vehicle.mesh.position.set(route.startX, 0, currentZ);
        vehicle.mesh.rotation.y = route.rotY;
      } else {
        const span = route.endX - route.startX;
        const currentX = route.startX + (span * progress);
        vehicle.mesh.position.set(currentX, 0, route.startZ);
        vehicle.mesh.rotation.y = route.rotY;
      }

      this.scene.add(vehicle.mesh);
      this.vehicles.push(vehicle);
    }
  }

  // Build authentic procedural vehicle models
  createVehicleMesh(type) {
    const group = new THREE.Group();
    let radius = 1.6;

    if (type === 'bus') {
      // DTC Green / Mumbai BEST Red City Bus
      radius = 3.6;
      const isRed = Math.random() > 0.5;
      const busColor = isRed ? 0xC62828 : 0x2E7D32;
      const busMat = new THREE.MeshStandardMaterial({ color: busColor, roughness: 0.6 });
      const windowMat = new THREE.MeshBasicMaterial({ color: 0x263238 });

      // Bus Main Body
      const bodyGeo = new THREE.BoxGeometry(2.4, 2.7, 7.8);
      const body = new THREE.Mesh(bodyGeo, busMat);
      body.position.y = 1.7;
      body.castShadow = true;
      group.add(body);

      // Window Glass Bands
      const winGeo = new THREE.BoxGeometry(2.42, 0.9, 6.8);
      const win = new THREE.Mesh(winGeo, windowMat);
      win.position.y = 2.1;
      group.add(win);

      // Headlights & Tail Lights
      const hLightMat = new THREE.MeshBasicMaterial({ color: 0xFFFEE0 });
      [-0.9, 0.9].forEach(hx => {
        const h = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.1), hLightMat);
        h.position.set(hx, 0.8, 3.92);
        group.add(h);
      });
    } else if (type === 'truck') {
      // Tata 407 Desi Goods Carrier Truck
      radius = 2.8;
      const cabMat = new THREE.MeshStandardMaterial({ color: 0xF57F17, roughness: 0.7 });
      const bedMat = new THREE.MeshStandardMaterial({ color: 0x1565C0, roughness: 0.8 });

      // Front Driver Cabin
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.2, 2.0), cabMat);
      cab.position.set(0, 1.45, 1.8);
      cab.castShadow = true;
      group.add(cab);

      // Blue Wooden Cargo Bed
      const bed = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.6, 3.8), bedMat);
      bed.position.set(0, 1.3, -1.1);
      bed.castShadow = true;
      group.add(bed);
    } else if (type === 'suv') {
      // Black Mahindra Scorpio Style SUV
      radius = 2.0;
      const carMat = new THREE.MeshStandardMaterial({ color: 0x11161B, metalness: 0.5, roughness: 0.4 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.85, 1.4, 4.2), carMat);
      body.position.y = 1.0;
      body.castShadow = true;
      group.add(body);
    } else if (type === 'sedan') {
      // White Maruti Swift Dzire Sedan
      radius = 1.8;
      const carMat = new THREE.MeshStandardMaterial({ color: 0xEEEEEE, metalness: 0.4, roughness: 0.5 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.75, 1.2, 3.8), carMat);
      body.position.y = 0.85;
      body.castShadow = true;
      group.add(body);
    } else if (type === 'auto') {
      // Yellow-Green AI Rickshaw
      radius = 1.35;
      const greenMat = new THREE.MeshStandardMaterial({ color: 0x0D7B3E });
      const yelMat = new THREE.MeshStandardMaterial({ color: 0xFFB800 });

      const lower = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.6, 2.2), greenMat);
      lower.position.y = 0.55;
      group.add(lower);

      const roof = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.12, 1.8), yelMat);
      roof.position.y = 1.45;
      group.add(roof);
    } else if (type === 'bike') {
      // Hero Splendor Motorcycle with Rider
      radius = 1.1;
      const bikeMat = new THREE.MeshStandardMaterial({ color: 0xB71C1C });
      const bike = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 1.8), bikeMat);
      bike.position.y = 0.55;
      group.add(bike);

      // Rider Helmet & Torso
      const riderMat = new THREE.MeshStandardMaterial({ color: 0x37474F });
      const torso = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.6, 0.3), riderMat);
      torso.position.set(0, 1.15, -0.1);
      group.add(torso);

      const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), new THREE.MeshBasicMaterial({ color: 0xFFEB3B }));
      helmet.position.set(0, 1.6, -0.1);
      group.add(helmet);
    }

    // Wheels for vehicles
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.9 });
    const wheelGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12);
    [-0.8, 0.8].forEach(wx => {
      [-1.2, 1.2].forEach(wz => {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.z = Math.PI / 2;
        w.position.set(wx, 0.32, wz);
        group.add(w);
      });
    });

    return { mesh: group, radius };
  }

  // Update AI vehicle logic every frame
  update(dt, playerPos, playerSpeedKmh, isTrafficLightRed) {
    this.vehicles.forEach(v => {
      const pos = v.mesh.position;
      const route = v.route;
      let shouldStop = false;

      // 1. Check Traffic Signals at intersections
      if (route.dz !== 0) {
        // North-South MG Road
        if (isTrafficLightRed('ns')) {
          if (route.dz > 0 && pos.z > -26 && pos.z < -18) shouldStop = true; // southbound stop line
          if (route.dz < 0 && pos.z < 26 && pos.z > 18) shouldStop = true;  // northbound stop line
        }
      } else {
        // East-West Expressway
        if (isTrafficLightRed('ew')) {
          if (route.dx > 0 && pos.x > -26 && pos.x < -18) shouldStop = true;
          if (route.dx < 0 && pos.x < 26 && pos.x > 18) shouldStop = true;
        }
      }

      // 2. Check other AI vehicles ahead in the SAME lane
      let minGapAhead = Infinity;
      for (let j = 0; j < this.vehicles.length; j++) {
        const other = this.vehicles[j];
        if (other === v || other.route.id !== route.id) continue;

        let gap = Infinity;
        if (route.dz > 0 && other.mesh.position.z > pos.z) {
          gap = other.mesh.position.z - pos.z;
        } else if (route.dz < 0 && other.mesh.position.z < pos.z) {
          gap = pos.z - other.mesh.position.z;
        } else if (route.dx > 0 && other.mesh.position.x > pos.x) {
          gap = other.mesh.position.x - pos.x;
        } else if (route.dx < 0 && other.mesh.position.x < pos.x) {
          gap = pos.x - other.mesh.position.x;
        }

        const safeDist = (v.type === 'bus' || v.type === 'truck') ? 14 : 9.5;
        if (gap > 0 && gap < safeDist && gap < minGapAhead) {
          minGapAhead = gap;
          shouldStop = true;
        }
      }

      // 3. Check Obstacle ahead: Player Auto Rickshaw
      const dxToPlayer = playerPos.x - pos.x;
      const dzToPlayer = playerPos.z - pos.z;
      let isPlayerAhead = false;
      if (route.dz > 0 && dzToPlayer > 0 && dzToPlayer < 10 && Math.abs(dxToPlayer) < 2.4) isPlayerAhead = true;
      if (route.dz < 0 && dzToPlayer < 0 && dzToPlayer > -10 && Math.abs(dxToPlayer) < 2.4) isPlayerAhead = true;
      if (route.dx > 0 && dxToPlayer > 0 && dxToPlayer < 10 && Math.abs(dzToPlayer) < 2.4) isPlayerAhead = true;
      if (route.dx < 0 && dxToPlayer < 0 && dxToPlayer > -10 && Math.abs(dzToPlayer) < 2.4) isPlayerAhead = true;

      if (isPlayerAhead) {
        shouldStop = true;
        v.blockedTimer += dt;
      } else {
        v.blockedTimer = 0;
      }

      // 4. Smooth deceleration or acceleration
      if (shouldStop) {
        v.speed = Math.max(0, v.speed - 16 * dt);
      } else {
        v.speed = Math.min(v.baseSpeed, v.speed + 8 * dt);
      }

      pos.x += route.dx * v.speed * dt;
      pos.z += route.dz * v.speed * dt;
      v.speedKmh = v.speed * 3.6;

      // 5. Recycle vehicle when reaching route bounds (with safe spacing)
      let needsRecycle = false;
      if (route.dz > 0 && pos.z > route.endZ) needsRecycle = true;
      if (route.dz < 0 && pos.z < route.endZ) needsRecycle = true;
      if (route.dx > 0 && pos.x > route.endX) needsRecycle = true;
      if (route.dx < 0 && pos.x < route.endX) needsRecycle = true;

      if (needsRecycle) {
        let minStartDist = Infinity;
        for (let j = 0; j < this.vehicles.length; j++) {
          const other = this.vehicles[j];
          if (other === v || other.route.id !== route.id) continue;
          let d = 0;
          if (route.dz !== 0) d = Math.abs(other.mesh.position.z - route.startZ);
          else d = Math.abs(other.mesh.position.x - route.startX);
          if (d < minStartDist) minStartDist = d;
        }

        const stagger = minStartDist < 18 ? 20 - minStartDist : 0;
        if (route.dz > 0) pos.z = route.startZ - stagger;
        else if (route.dz < 0) pos.z = route.startZ + stagger;
        else if (route.dx > 0) pos.x = route.startX - stagger;
        else if (route.dx < 0) pos.x = route.startX + stagger;
        v.speed = v.baseSpeed;
      }
    });
  }

  getTrafficVehicles() {
    return this.vehicles;
  }
}
