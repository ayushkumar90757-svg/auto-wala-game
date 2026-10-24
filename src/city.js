// AUTO WALA: Procedural 3D Indian City Environment ("Dilwalon Ki Nagri")
import * as THREE from 'three';
import { textureFactory } from './textures.js';

export class IndianCity {
  constructor(scene) {
    this.scene = scene;
    this.cityGroup = new THREE.Group();
    this.collisionBoxes = [];
    this.trafficLights = [];
    this.landmarks = {};
    this.streetLights = [];

    this.roadTexture = textureFactory.createRoadTexture();
    this.zebraTexture = textureFactory.createZebraTexture();
    this.kerbTexture = textureFactory.createKerbTexture();

    this.buildCity();
    this.scene.add(this.cityGroup);
  }

  buildCity() {
    this.buildGroundAndRoads();
    this.buildMetroViaduct();
    this.buildFlyover();
    this.buildBuildingsAndShops();
    this.buildMarketBazaar();
    this.buildLandmarks();
    this.buildStreetFurniture();
    this.buildTreesAndProps();
  }

  // 1. Roads Grid & Sidewalks
  buildGroundAndRoads() {
    // City base terrain / ground
    const groundGeo = new THREE.PlaneGeometry(600, 600);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x2A323D,
      roughness: 0.95
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    this.cityGroup.add(ground);

    // Road Materials
    const roadMat = new THREE.MeshStandardMaterial({
      map: this.roadTexture,
      roughness: 0.8
    });
    this.roadTexture.repeat.set(1, 24);

    const zebraMat = new THREE.MeshStandardMaterial({
      map: this.zebraTexture,
      roughness: 0.8
    });

    const sidewalkMat = new THREE.MeshStandardMaterial({
      color: 0x90A4AE,
      roughness: 0.85
    });

    const kerbMat = new THREE.MeshStandardMaterial({
      map: this.kerbTexture,
      roughness: 0.8
    });
    this.kerbTexture.repeat.set(24, 1);

    // Main Avenue (North - South): 4-Lane MG Road (width 22m, length 400m)
    const mgRoadGeo = new THREE.PlaneGeometry(22, 400);
    const mgRoad = new THREE.Mesh(mgRoadGeo, roadMat);
    mgRoad.rotation.x = -Math.PI / 2;
    mgRoad.position.set(0, 0.01, 0);
    mgRoad.receiveShadow = true;
    this.cityGroup.add(mgRoad);

    // East - West Commercial Expressway (width 20m, length 400m)
    const ewRoadGeo = new THREE.PlaneGeometry(400, 20);
    const ewRoadMat = roadMat.clone();
    ewRoadMat.map = ewRoadMat.map.clone();
    ewRoadMat.map.repeat.set(24, 1);
    const ewRoad = new THREE.Mesh(ewRoadGeo, ewRoadMat);
    ewRoad.rotation.x = -Math.PI / 2;
    ewRoad.position.set(0, 0.02, 0);
    ewRoad.receiveShadow = true;
    this.cityGroup.add(ewRoad);

    // Secondary Cross Streets (Z = -90 and Z = 90)
    [-90, 90].forEach(z => {
      const crossGeo = new THREE.PlaneGeometry(300, 14);
      const crossRoad = new THREE.Mesh(crossGeo, ewRoadMat);
      crossRoad.rotation.x = -Math.PI / 2;
      crossRoad.position.set(0, 0.015, z);
      this.cityGroup.add(crossRoad);
    });

    // Secondary North-South Streets (X = -85 and X = 85)
    [-85, 85].forEach(x => {
      const secGeo = new THREE.PlaneGeometry(14, 300);
      const secRoad = new THREE.Mesh(secGeo, roadMat);
      secRoad.rotation.x = -Math.PI / 2;
      secRoad.position.set(x, 0.015, 0);
      this.cityGroup.add(secRoad);
    });

    // Zebra Crossings at Main Intersections
    const zebraOffsets = [
      { x: 0, z: 14, w: 22, h: 4, rot: 0 },
      { x: 0, z: -14, w: 22, h: 4, rot: 0 },
      { x: 14, z: 0, w: 4, h: 20, rot: 0 },
      { x: -14, z: 0, w: 4, h: 20, rot: 0 }
    ];

    zebraOffsets.forEach(z => {
      const zGeo = new THREE.PlaneGeometry(z.w, z.h);
      const zMesh = new THREE.Mesh(zGeo, zebraMat);
      zMesh.rotation.x = -Math.PI / 2;
      zMesh.position.set(z.x, 0.03, z.z);
      this.cityGroup.add(zMesh);
    });

    // Solid White & Yellow STOP LINES before each zebra crossing
    const stopLineMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const yellowStopLineMat = new THREE.MeshBasicMaterial({ color: 0xFFD600 });

    const stopLines = [
      // MG Road Southbound (stop before z = -14)
      { x: 0, z: -18, w: 22, h: 0.9, mat: stopLineMat },
      { x: 0, z: -19.2, w: 22, h: 0.45, mat: yellowStopLineMat },
      // MG Road Northbound (stop before z = 14)
      { x: 0, z: 18, w: 22, h: 0.9, mat: stopLineMat },
      { x: 0, z: 19.2, w: 22, h: 0.45, mat: yellowStopLineMat },
      // Expressway Eastbound (stop before x = -14)
      { x: -18, z: 0, w: 0.9, h: 20, mat: stopLineMat },
      { x: -19.2, z: 0, w: 0.45, h: 20, mat: yellowStopLineMat },
      // Expressway Westbound (stop before x = 14)
      { x: 18, z: 0, w: 0.9, h: 20, mat: stopLineMat },
      { x: 19.2, z: 0, w: 0.45, h: 20, mat: yellowStopLineMat }
    ];

    stopLines.forEach(sl => {
      const slMesh = new THREE.Mesh(new THREE.PlaneGeometry(sl.w, sl.h), sl.mat);
      slMesh.rotation.x = -Math.PI / 2;
      slMesh.position.set(sl.x, 0.035, sl.z);
      this.cityGroup.add(slMesh);
    });

    // Central Road Median Divider with Yellow-Black Kerb on MG Road
    const medianGeo = new THREE.BoxGeometry(0.8, 0.35, 380);
    const median = new THREE.Mesh(medianGeo, kerbMat);
    median.position.set(0, 0.18, 0);
    median.castShadow = true;
    this.cityGroup.add(median);
    // Collision box for central median
    this.addBoxCollider(-0.4, 0.4, -190, 190);

    // Footpaths / Sidewalks along MG Road
    [-13, 13].forEach(x => {
      const walkGeo = new THREE.BoxGeometry(3.5, 0.3, 380);
      const walk = new THREE.Mesh(walkGeo, sidewalkMat);
      walk.position.set(x, 0.15, 0);
      this.cityGroup.add(walk);

      // Yellow-Black Kerb strip along footpath edge
      const kerbEdgeGeo = new THREE.BoxGeometry(0.3, 0.35, 380);
      const kerbEdge = new THREE.Mesh(kerbEdgeGeo, kerbMat);
      kerbEdge.position.set(x > 0 ? x - 1.75 : x + 1.75, 0.18, 0);
      this.cityGroup.add(kerbEdge);
    });
  }

  // 2. Overhead Delhi/Mumbai Metro Viaduct Pillars & Rail
  buildMetroViaduct() {
    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x78909C,
      roughness: 0.7
    });

    const railMat = new THREE.MeshStandardMaterial({
      color: 0x37474F,
      metalness: 0.6,
      roughness: 0.4
    });

    // Elevated Metro Track running along X = 7m
    const trackGeo = new THREE.BoxGeometry(4.5, 0.8, 380);
    const track = new THREE.Mesh(trackGeo, concreteMat);
    track.position.set(7, 7.5, 0);
    track.castShadow = true;
    this.cityGroup.add(track);

    // Steel rails on top
    const railGeo = new THREE.BoxGeometry(0.15, 0.2, 380);
    const leftRail = new THREE.Mesh(railGeo, railMat);
    leftRail.position.set(6.2, 8.0, 0);
    this.cityGroup.add(leftRail);

    const rightRail = new THREE.Mesh(railGeo, railMat);
    rightRail.position.set(7.8, 8.0, 0);
    this.cityGroup.add(rightRail);

    // Metro Station Viaduct Pillars every 35m
    for (let z = -175; z <= 175; z += 35) {
      if (Math.abs(z) < 20) continue; // skip center intersection

      const pillarGeo = new THREE.CylinderGeometry(0.7, 0.8, 7.5, 12);
      const pillar = new THREE.Mesh(pillarGeo, concreteMat);
      pillar.position.set(7, 3.75, z);
      pillar.castShadow = true;
      this.cityGroup.add(pillar);

      // Pillar cross capital head
      const capGeo = new THREE.BoxGeometry(4.2, 0.6, 1.8);
      const cap = new THREE.Mesh(capGeo, concreteMat);
      cap.position.set(7, 7.2, z);
      this.cityGroup.add(cap);

      // Add collision for pillars
      this.addBoxCollider(6.2, 7.8, z - 0.8, z + 0.8);
    }
  }

  // 3. Elevated Flyover / Bridge Section (X = -85 road area)
  buildFlyover() {
    const flyoverGroup = new THREE.Group();
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x546E7A, roughness: 0.65 });
    const barrierMat = new THREE.MeshStandardMaterial({ color: 0xE0E0E0, roughness: 0.5 });

    // Flyover deck (length 140m, elevated to 5.5m)
    const deckGeo = new THREE.BoxGeometry(10, 0.8, 140);
    const deck = new THREE.Mesh(deckGeo, concreteMat);
    deck.position.set(-85, 5.5, 0);
    deck.castShadow = true;
    flyoverGroup.add(deck);

    // Crash Barriers along flyover
    [-4.8, 4.8].forEach(xOff => {
      const barGeo = new THREE.BoxGeometry(0.3, 0.9, 140);
      const barrier = new THREE.Mesh(barGeo, barrierMat);
      barrier.position.set(-85 + xOff, 6.2, 0);
      flyoverGroup.add(barrier);
    });

    // Flyover Incline Ramps on both ends
    [-85].forEach(x => {
      // South Ramp
      const rampGeo = new THREE.BoxGeometry(10, 0.6, 40);
      const rampSouth = new THREE.Mesh(rampGeo, concreteMat);
      rampSouth.position.set(x, 2.7, 90);
      rampSouth.rotation.x = -0.14;
      flyoverGroup.add(rampSouth);

      // North Ramp
      const rampNorth = new THREE.Mesh(rampGeo, concreteMat);
      rampNorth.position.set(x, 2.7, -90);
      rampNorth.rotation.x = 0.14;
      flyoverGroup.add(rampNorth);
    });

    this.cityGroup.add(flyoverGroup);
  }

  // 4. Buildings with Indian Architecture & Commercial Shops
  buildBuildingsAndShops() {
    const bldgThemes = ['orange', 'yellow', 'blue', 'teal', 'brick', 'cream'];

    // Blocks of buildings on four quadrants
    const blocks = [
      // Quadrant 1: North-East (X > 20, Z > 20)
      { startX: 25, endX: 160, startZ: 25, endZ: 160, dir: 1 },
      // Quadrant 2: North-West (X < -20, Z > 20)
      { startX: -160, endX: -25, startZ: 25, endZ: 160, dir: 1 },
      // Quadrant 3: South-East (X > 20, Z < -20)
      { startX: 25, endX: 160, startZ: -160, endZ: -25, dir: -1 },
      // Quadrant 4: South-West (X < -20, Z < -20)
      { startX: -160, endX: -25, startZ: -160, endZ: -25, dir: -1 }
    ];

    let shopCounter = 0;
    const shopKeys = ['chai', 'sweets', 'kirana', 'paan', 'medical'];

    // Place Roadside Row of Shops & Apartments facing the Main Road
    const roadsideRows = [
      { x: 19, zMin: -150, zMax: 150, side: 'east' },
      { x: -19, zMin: -150, zMax: 150, side: 'west' }
    ];

    roadsideRows.forEach(row => {
      for (let z = row.zMin; z <= row.zMax; z += 24) {
        if (Math.abs(z) < 22) continue; // skip intersection

        const theme = bldgThemes[Math.floor(Math.random() * bldgThemes.length)];
        const bldgTex = textureFactory.createBuildingTexture(theme);
        const bldgMat = new THREE.MeshStandardMaterial({ map: bldgTex, roughness: 0.85 });

        const width = 18;
        const depth = 20;
        const height = 14 + Math.random() * 16; // 3 to 6 stories

        const bldgGeo = new THREE.BoxGeometry(depth, height, width);
        const bldg = new THREE.Mesh(bldgGeo, bldgMat);
        const posX = row.side === 'east' ? row.x + depth / 2 : row.x - depth / 2;
        bldg.position.set(posX, height / 2, z);
        bldg.castShadow = true;
        bldg.receiveShadow = true;
        this.cityGroup.add(bldg);

        // Add Solid Collider
        this.addBoxCollider(posX - depth / 2, posX + depth / 2, z - width / 2, z + width / 2);

        // Ground Floor Shop Signboard facing street
        const shopType = shopKeys[shopCounter % shopKeys.length];
        shopCounter++;
        const signTex = textureFactory.createShopSign(shopType);
        const signGeo = new THREE.PlaneGeometry(8, 2);
        const signMat = new THREE.MeshBasicMaterial({ map: signTex });
        const sign = new THREE.Mesh(signGeo, signMat);

        if (row.side === 'east') {
          sign.position.set(row.x + 0.1, 3.5, z);
          sign.rotation.y = -Math.PI / 2;
        } else {
          sign.position.set(row.x - 0.1, 3.5, z);
          sign.rotation.y = Math.PI / 2;
        }
        this.cityGroup.add(sign);

        // Shop Fabric Awning / Chajja
        const awningGeo = new THREE.BoxGeometry(2, 0.15, 8.5);
        const awningMat = new THREE.MeshStandardMaterial({
          color: (shopCounter % 2 === 0) ? 0xD32F2F : 0x1976D2,
          roughness: 0.7
        });
        const awning = new THREE.Mesh(awningGeo, awningMat);
        awning.position.set(row.side === 'east' ? row.x - 0.8 : row.x + 0.8, 2.7, z);
        awning.rotation.z = row.side === 'east' ? 0.2 : -0.2;
        this.cityGroup.add(awning);
      }
    });
  }

  // 5. Bustling Bapu Bazaar Market Zone (X = 40 to 70, Z = 40 to 80)
  buildMarketBazaar() {
    const marketGroup = new THREE.Group();

    // Roadside Stalls, Tea Kettles, and Fruit Carts
    for (let i = 0; i < 6; i++) {
      const zPos = 45 + i * 8;
      const stallX = 14.5;

      // Wooden Table Stall
      const tableGeo = new THREE.BoxGeometry(2.5, 0.9, 1.4);
      const woodMat = new THREE.MeshStandardMaterial({ color: 0x8D6E63, roughness: 0.9 });
      const table = new THREE.Mesh(tableGeo, woodMat);
      table.position.set(stallX, 0.45, zPos);
      marketGroup.add(table);

      // Colorful Market Umbrella
      const poleGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.8, 8);
      const pole = new THREE.Mesh(poleGeo, new THREE.MeshStandardMaterial({ color: 0x333 }));
      pole.position.set(stallX, 1.4, zPos);
      marketGroup.add(pole);

      const umbrellaGeo = new THREE.ConeGeometry(1.6, 0.6, 10);
      const umbrellaColors = [0xFFC107, 0x00E676, 0xFF5252, 0x2979FF];
      const umbrellaMat = new THREE.MeshStandardMaterial({
        color: umbrellaColors[i % umbrellaColors.length],
        roughness: 0.6
      });
      const umbrella = new THREE.Mesh(umbrellaGeo, umbrellaMat);
      umbrella.position.set(stallX, 2.7, zPos);
      marketGroup.add(umbrella);

      // Tea kettle / fruit crates on table
      const crateGeo = new THREE.BoxGeometry(0.8, 0.35, 0.8);
      const crateMat = new THREE.MeshStandardMaterial({ color: 0xFF9800 });
      const crate = new THREE.Mesh(crateGeo, crateMat);
      crate.position.set(stallX, 1.05, zPos);
      marketGroup.add(crate);

      // Stall collision
      this.addBoxCollider(stallX - 1.3, stallX + 1.3, zPos - 0.8, zPos + 0.8);
    }

    this.cityGroup.add(marketGroup);
  }

  // 6. City Landmarks (Railway Station, Hospital, Gandhi Chowk, Metro Exit, Workshop)
  buildLandmarks() {
    // A. Central Railway Station (At North End: X = 0, Z = -185)
    const stationGroup = new THREE.Group();
    const stationMat = new THREE.MeshStandardMaterial({ color: 0x8E281F, roughness: 0.7 }); // Heritage Red Sandstone
    const whiteTrimMat = new THREE.MeshStandardMaterial({ color: 0xFDFEFE, roughness: 0.5 });
    const darkMetalMat = new THREE.MeshStandardMaterial({ color: 0x212121, metalness: 0.7 });

    // Main Station Heritage Terminal Facade
    const facadeGeo = new THREE.BoxGeometry(64, 18, 16);
    const facade = new THREE.Mesh(facadeGeo, stationMat);
    facade.position.set(0, 9, -188);
    stationGroup.add(facade);

    // Side Wings (East and West Wings)
    [-30, 30].forEach(wingX => {
      const wingGeo = new THREE.BoxGeometry(14, 14, 18);
      const wing = new THREE.Mesh(wingGeo, stationMat);
      wing.position.set(wingX, 7, -186);
      stationGroup.add(wing);

      // Mini corner ornamental cupolas
      const miniCupola = new THREE.Mesh(new THREE.SphereGeometry(2.2, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2), whiteTrimMat);
      miniCupola.position.set(wingX, 14, -186);
      stationGroup.add(miniCupola);
    });

    // Heritage Clock Tower in center
    const domeTowerGeo = new THREE.BoxGeometry(12, 28, 12);
    const domeTower = new THREE.Mesh(domeTowerGeo, stationMat);
    domeTower.position.set(0, 14, -185);
    stationGroup.add(domeTower);

    // Large Round Clock Face
    const clockFace = new THREE.Mesh(
      new THREE.CircleGeometry(2.4, 24),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    );
    clockFace.position.set(0, 22, -178.9);
    stationGroup.add(clockFace);

    // Clock Hands
    const clockHandH = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.4, 0.05), new THREE.MeshBasicMaterial({ color: 0x111111 }));
    clockHandH.position.set(0, 22.4, -178.85);
    stationGroup.add(clockHandH);
    const clockHandM = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 0.05), new THREE.MeshBasicMaterial({ color: 0x111111 }));
    clockHandM.position.set(0.6, 22, -178.85);
    stationGroup.add(clockHandM);

    // Mughal Dome on top of Tower
    const domeGeo = new THREE.SphereGeometry(5.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    const dome = new THREE.Mesh(domeGeo, whiteTrimMat);
    dome.position.set(0, 28, -185);
    stationGroup.add(dome);

    // Grand Entrance Archway Porch
    const porchGeo = new THREE.BoxGeometry(22, 7, 6);
    const porch = new THREE.Mesh(porchGeo, stationMat);
    porch.position.set(0, 3.5, -178);
    stationGroup.add(porch);

    // Main Station Signboard
    const stSignTex = textureFactory.createShopSign('station');
    const stSignGeo = new THREE.PlaneGeometry(18, 4.5);
    const stSign = new THREE.Mesh(stSignGeo, new THREE.MeshBasicMaterial({ map: stSignTex }));
    stSign.position.set(0, 9.8, -174.8);
    stationGroup.add(stSign);

    // Platform 1 & Platform 2 Canopies on West Side (X = -32, Z = -168 to -195)
    const platRoofGeo = new THREE.BoxGeometry(14, 0.5, 32);
    const platRoofMat = new THREE.MeshStandardMaterial({ color: 0x37474F, roughness: 0.7 });
    const platRoof = new THREE.Mesh(platRoofGeo, platRoofMat);
    platRoof.position.set(-32, 6.5, -178);
    stationGroup.add(platRoof);

    // Platform Support Pillars
    [-170, -186].forEach(pz => {
      const pCol = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 6.5, 8), darkMetalMat);
      pCol.position.set(-32, 3.25, pz);
      stationGroup.add(pCol);
    });

    // Platform 1 and 2 Signboards
    const p1Sign = new THREE.Mesh(new THREE.PlaneGeometry(4, 1.3), new THREE.MeshBasicMaterial({ map: textureFactory.createPlatformSign(1) }));
    p1Sign.position.set(-25.2, 5.2, -175);
    p1Sign.rotation.y = Math.PI / 2;
    stationGroup.add(p1Sign);

    const p2Sign = new THREE.Mesh(new THREE.PlaneGeometry(4, 1.3), new THREE.MeshBasicMaterial({ map: textureFactory.createPlatformSign(2) }));
    p2Sign.position.set(-38.8, 5.2, -175);
    p2Sign.rotation.y = -Math.PI / 2;
    stationGroup.add(p2Sign);

    // Railway Tracks (Two Parallel Tracks with steel rails)
    [-30, -34].forEach(railX => {
      [-0.7, 0.7].forEach(offset => {
        const railBar = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.15, 45),
          new THREE.MeshStandardMaterial({ color: 0xB0BEC5, metalness: 0.9 })
        );
        railBar.position.set(railX + offset, 0.12, -180);
        stationGroup.add(railBar);
      });
    });

    // Railway Station Passenger Waiting Concourse & Benches
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x5D4037, roughness: 0.9 });
    [ { x: -6, z: -176 }, { x: 6, z: -176 } ].forEach(bPos => {
      const bench = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.85, 0.7), benchMat);
      bench.position.set(bPos.x, 0.42, bPos.z);
      stationGroup.add(bench);
    });

    // Passenger Luggage Bags Stack
    const bagMat = new THREE.MeshStandardMaterial({ color: 0x1565C0 });
    const luggage = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.5), bagMat);
    luggage.position.set(4, 0.3, -176);
    stationGroup.add(luggage);

    // DESIGNATED AUTO RICKSHAW STAND & DRIVEWAY BAY (X: 5 to 16, Z: -155 to -174)
    // Green-tinted dedicated auto parking apron
    const standApronGeo = new THREE.PlaneGeometry(12, 22);
    const standApronMat = new THREE.MeshStandardMaterial({ color: 0x1B382B, roughness: 0.8 });
    const standApron = new THREE.Mesh(standApronGeo, standApronMat);
    standApron.rotation.x = -Math.PI / 2;
    standApron.position.set(10.5, 0.035, -164);
    stationGroup.add(standApron);

    // Yellow Painted Auto Bay Parking Slots on Tarmac
    const bayLineMat = new THREE.MeshBasicMaterial({ color: 0xFFD600 });
    for (let bz = -172; bz <= -156; bz += 5) {
      const bayLine = new THREE.Mesh(new THREE.PlaneGeometry(8, 0.25), bayLineMat);
      bayLine.rotation.x = -Math.PI / 2;
      bayLine.position.set(10.5, 0.04, bz);
      stationGroup.add(bayLine);
    }

    // Overhead "AUTO RICKSHAW STAND" Gantry Portal Signboard
    const gantryGroup = new THREE.Group();
    const gPostL = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 5.2, 8), darkMetalMat);
    gPostL.position.set(4.5, 2.6, -156);
    const gPostR = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 5.2, 8), darkMetalMat);
    gPostR.position.set(16.5, 2.6, -156);
    gantryGroup.add(gPostL);
    gantryGroup.add(gPostR);

    const autoStandSign = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 3),
      new THREE.MeshBasicMaterial({ map: textureFactory.createAutoStandSign() })
    );
    autoStandSign.position.set(10.5, 4.4, -156);
    gantryGroup.add(autoStandSign);

    stationGroup.add(gantryGroup);

    this.addBoxCollider(-38, 38, -196, -177);
    this.cityGroup.add(stationGroup);

    // B. Apollo Hospital & Medical Zone (At X = -60, Z = 70)
    const hospGroup = new THREE.Group();
    const hospMat = new THREE.MeshStandardMaterial({ color: 0xECEFF1, roughness: 0.6 });
    const hospGeo = new THREE.BoxGeometry(32, 22, 26);
    const hosp = new THREE.Mesh(hospGeo, hospMat);
    hosp.position.set(-60, 11, 70);
    hospGroup.add(hosp);

    // Red Cross Emblem
    const crossBar1 = new THREE.Mesh(new THREE.BoxGeometry(6, 1.8, 0.2), new THREE.MeshBasicMaterial({ color: 0xD32F2F }));
    crossBar1.position.set(-60, 18, 56.8);
    hospGroup.add(crossBar1);
    const crossBar2 = new THREE.Mesh(new THREE.BoxGeometry(1.8, 6, 0.2), new THREE.MeshBasicMaterial({ color: 0xD32F2F }));
    crossBar2.position.set(-60, 18, 56.8);
    hospGroup.add(crossBar2);

    this.addBoxCollider(-76, -44, 57, 83);
    this.cityGroup.add(hospGroup);

    // C. Gandhi Chowk Roundabout with Statue & Fountain (Center: X = 0, Z = 0)
    const chowkGroup = new THREE.Group();
    const curbCircleGeo = new THREE.CylinderGeometry(5.2, 5.2, 0.45, 24);
    const curbCircle = new THREE.Mesh(curbCircleGeo, new THREE.MeshStandardMaterial({ color: 0xCFD8DC }));
    curbCircle.position.set(0, 0.22, 0);
    chowkGroup.add(curbCircle);

    // Green grass patch inside roundabout
    const grassGeo = new THREE.CylinderGeometry(4.8, 4.8, 0.5, 24);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x388E3C, roughness: 0.9 });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.position.set(0, 0.25, 0);
    chowkGroup.add(grass);

    // Statue plinth & pillar
    const plinthGeo = new THREE.BoxGeometry(2, 2.5, 2);
    const plinth = new THREE.Mesh(plinthGeo, new THREE.MeshStandardMaterial({ color: 0xE0E0E0 }));
    plinth.position.set(0, 1.5, 0);
    chowkGroup.add(plinth);

    // Bronze Mahatma Gandhi / Ashok Pillar statue
    const statueGeo = new THREE.CylinderGeometry(0.35, 0.45, 2.8, 12);
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xC5A059, metalness: 0.7, roughness: 0.3 });
    const statue = new THREE.Mesh(statueGeo, bronzeMat);
    statue.position.set(0, 4.1, 0);
    chowkGroup.add(statue);

    this.addBoxCollider(-3.5, 3.5, -3.5, 3.5);
    this.cityGroup.add(chowkGroup);

    // D. Auto Wala Workshop & Garage (At X = 65, Z = -60)
    const garageGroup = new THREE.Group();
    const gWallMat = new THREE.MeshStandardMaterial({ color: 0x37474F });
    const gBuilding = new THREE.Mesh(new THREE.BoxGeometry(24, 8, 20), gWallMat);
    gBuilding.position.set(65, 4, -60);
    garageGroup.add(gBuilding);

    // Workshop Board
    const gSignGeo = new THREE.PlaneGeometry(12, 2.5);
    const gSignMat = new THREE.MeshBasicMaterial({ color: 0xFFB800 });
    const gSign = new THREE.Mesh(gSignGeo, gSignMat);
    gSign.position.set(65, 6, -49.8);
    garageGroup.add(gSign);

    this.addBoxCollider(53, 77, -70, -50);
    this.cityGroup.add(garageGroup);

    // Register Landmark Zones for Passenger Missions
    this.landmarks = {
      railway: { name: 'Central Railway Station Auto Stand', x: 10, z: -164, color: 0xFF1744 },
      chowk: { name: 'Gandhi Chowk Roundabout', x: 0, z: 16, color: 0xFFC107 },
      bazaar: { name: 'Bapu Bazaar Market', x: 16, z: 60, color: 0xFF6D00 },
      hospital: { name: 'Apollo 24/7 Hospital', x: -45, z: 65, color: 0x00E676 },
      metro: { name: 'Metro Terminal Gate 2', x: 14, z: -85, color: 0x2979FF },
      chai: { name: 'Sharma Chai & Adda', x: -14, z: -40, color: 0xFF9100 },
      workshop: { name: 'Auto Wala Garage', x: 50, z: -55, color: 0x00E5FF },
      flyover: { name: 'Elevated Flyover Ramp', x: -85, z: 0, color: 0xAA00FF }
    };
  }

  // 7. Streetlights & Working Traffic Signals
  buildStreetFurniture() {
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x263238, metalness: 0.6 });

    // Streetlights along MG Road
    for (let z = -170; z <= 170; z += 40) {
      if (Math.abs(z) < 15) continue;
      [-12, 12].forEach(x => {
        const poleGroup = new THREE.Group();
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 6.5, 8), metalMat);
        pole.position.set(x, 3.25, z);
        poleGroup.add(pole);

        const arm = new THREE.Mesh(new THREE.BoxGeometry(x > 0 ? -2.2 : 2.2, 0.1, 0.1), metalMat);
        arm.position.set(x > 0 ? x - 1 : x + 1, 6.4, z);
        poleGroup.add(arm);

        // Street light fixture & point light
        const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.4), new THREE.MeshBasicMaterial({ color: 0xFFF9C4 }));
        lamp.position.set(x > 0 ? x - 2 : x + 2, 6.3, z);
        poleGroup.add(lamp);

        const pointLight = new THREE.PointLight(0xFFD54F, 0.8, 22);
        pointLight.position.set(x > 0 ? x - 2 : x + 2, 5.8, z);
        poleGroup.add(pointLight);
        this.streetLights.push(pointLight);

        this.cityGroup.add(poleGroup);
        this.addBoxCollider(x - 0.4, x + 0.4, z - 0.4, z + 0.4);
      });
    }

    // Traffic Signal Poles at Main Intersection (X = 0, Z = 0)
    const signalPositions = [
      { x: -11, z: -16, rot: 0 },
      { x: 11, z: 16, rot: Math.PI },
      { x: -16, z: 11, rot: Math.PI / 2 },
      { x: 16, z: -11, rot: -Math.PI / 2 }
    ];

    signalPositions.forEach((pos, idx) => {
      const sigGroup = new THREE.Group();
      sigGroup.position.set(pos.x, 0, pos.z);
      sigGroup.rotation.y = pos.rot;

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 5.5, 8), metalMat);
      pole.position.y = 2.75;
      sigGroup.add(pole);

      // Large, Prominent 3-Light Traffic Signal Box (Red, Yellow, Green)
      const boxGeo = new THREE.BoxGeometry(0.85, 2.2, 0.45);
      const box = new THREE.Mesh(boxGeo, new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 }));
      box.position.set(0, 4.8, 0);
      sigGroup.add(box);

      // Yellow border rim around signal head for authentic Indian street look
      const rimGeo = new THREE.BoxGeometry(0.95, 2.3, 0.05);
      const rim = new THREE.Mesh(rimGeo, new THREE.MeshStandardMaterial({ color: 0xFFC107 }));
      rim.position.set(0, 4.8, -0.05);
      sigGroup.add(rim);

      // Large Red, Yellow, Green lens meshes with emissive glow for daylight & night
      const redMat = new THREE.MeshStandardMaterial({ color: 0xFF1744, emissive: 0xFF1744, emissiveIntensity: 2.2, roughness: 0.3 });
      const redLens = new THREE.Mesh(new THREE.CircleGeometry(0.24, 16), redMat);
      redLens.position.set(0, 5.4, 0.23);
      sigGroup.add(redLens);

      const yelMat = new THREE.MeshStandardMaterial({ color: 0x332600, emissive: 0x000000, emissiveIntensity: 0, roughness: 0.3 });
      const yelLens = new THREE.Mesh(new THREE.CircleGeometry(0.24, 16), yelMat);
      yelLens.position.set(0, 4.8, 0.23);
      sigGroup.add(yelLens);

      const grnMat = new THREE.MeshStandardMaterial({ color: 0x003311, emissive: 0x000000, emissiveIntensity: 0, roughness: 0.3 });
      const grnLens = new THREE.Mesh(new THREE.CircleGeometry(0.24, 16), grnMat);
      grnLens.position.set(0, 4.2, 0.23);
      sigGroup.add(grnLens);

      this.cityGroup.add(sigGroup);

      // Track traffic light object for rules manager
      this.trafficLights.push({
        id: idx,
        x: pos.x,
        z: pos.z,
        redLens,
        yelLens,
        grnLens,
        state: 'green'
      });
    });
  }

  // 8. Indian Trees (Gulmohar, Neem) and Roadside Props
  buildTreesAndProps() {
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5D4037, roughness: 0.9 });
    const neemLeafMat = new THREE.MeshStandardMaterial({ color: 0x2E7D32, roughness: 0.8 });
    const gulmoharLeafMat = new THREE.MeshStandardMaterial({ color: 0xD84315, roughness: 0.8 }); // vibrant orange-red flowers!

    // Plant trees along sidewalk boundaries
    for (let z = -140; z <= 140; z += 30) {
      [-15, 15].forEach((x, i) => {
        const isGulmohar = (z + x) % 2 === 0;
        const treeGroup = new THREE.Group();

        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.35, 3.5, 8), trunkMat);
        trunk.position.set(x, 1.75, z);
        trunk.castShadow = true;
        treeGroup.add(trunk);

        const canopyGeo = new THREE.DodecahedronGeometry(2.2, 1);
        const canopy = new THREE.Mesh(canopyGeo, isGulmohar ? gulmoharLeafMat : neemLeafMat);
        canopy.position.set(x, 4.4, z);
        canopy.castShadow = true;
        treeGroup.add(canopy);

        this.cityGroup.add(treeGroup);
        this.addBoxCollider(x - 0.4, x + 0.4, z - 0.4, z + 0.4);
      });
    }

    // Classic Indian Desi Cow lounging peacefully near divider!
    this.buildDesiCow(1.8, 12);
  }

  // Procedural Indian Sacred Cow model lounging near road
  buildDesiCow(x, z) {
    const cowGroup = new THREE.Group();
    cowGroup.position.set(x, 0, z);
    cowGroup.rotation.y = -0.4;

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xEDE7F6, roughness: 0.8 });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0x212121 });

    // Lounging body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.55, 1.3), whiteMat);
    body.position.set(0, 0.35, 0);
    cowGroup.add(body);

    // Hump (Zebu cow hump)
    const hump = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 8), whiteMat);
    hump.position.set(0, 0.68, 0.25);
    cowGroup.add(hump);

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.5), whiteMat);
    head.position.set(0, 0.6, 0.7);
    cowGroup.add(head);

    // Curved Horns
    [-0.15, 0.15].forEach(hx => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.3, 6), hornMat);
      horn.position.set(hx, 0.85, 0.65);
      horn.rotation.x = -0.3;
      cowGroup.add(horn);
    });

    this.cityGroup.add(cowGroup);
    this.addBoxCollider(x - 0.6, x + 0.6, z - 0.8, z + 0.8);
  }

  // Helper: Register collision box
  addBoxCollider(minX, maxX, minZ, maxZ) {
    this.collisionBoxes.push({ minX, maxX, minZ, maxZ });
  }

  // Set day/night lighting for street lights
  setNightMode(isNight) {
    this.streetLights.forEach(light => {
      light.intensity = isNight ? 1.4 : 0.0;
    });
  }
}
