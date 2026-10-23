# 🛺 AUTO WALA: Indian City Life
### *Desi 3D Indian Auto Rickshaw Driving Simulator*

[![Three.js](https://img.shields.io/badge/Three.js-r160-green.svg)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AUTO WALA: Indian City Life** is a full-featured, playable 3D Indian auto-rickshaw driving simulator built with Three.js, JavaScript, and Vite. Drive the legendary yellow-and-green Bajaj RE three-wheeler across vibrant, bustling Indian streets inspired by Delhi, Mumbai, and Ahmedabad. Pick up colorful passengers, run the digital fare meter, follow traffic signals, navigate busy markets, upgrade your auto in the workshop, and dodge traffic police challans!

---

## 🎮 How to Launch and Play

### Quick Start:
1. Ensure **Node.js** (v18+) is installed.
2. Open terminal in the project directory:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   *(On local Wi-Fi, you can also open the Network URL displayed in your terminal on your Android phone or iPhone!)*

---

## 📱 Android Mobile APK & Installation

The project includes a complete native Android project configured with **Capacitor** in the [`android/`](file:///c:/Users/ayush/OneDrive/Desktop/dashdad/android) folder, complete with AndroidManifest, splash screens, launcher icons, landscape lock, and hardware acceleration.

### Method 1: Build APK via Android Studio (Standard)
1. Open **Android Studio**.
2. Click **"Open"** and choose the `android` folder in this project:
   `c:\Users\ayush\OneDrive\Desktop\dashdad\android`
3. In Android Studio, go to the top menu: **Build -> Build Bundle(s) / APK(s) -> Build APK(s)**.
4. Your APK file will be ready at:
   `android/app/build/outputs/apk/debug/app-debug.apk`
5. Transfer `app-debug.apk` to your Android phone and install!

### Method 2: Automatic 1-Click Cloud APK Build (GitHub Actions)
- A ready-to-use GitHub Actions workflow is set up at [`.github/workflows/build-apk.yml`](file:///c:/Users/ayush/OneDrive/Desktop/dashdad/.github/workflows/build-apk.yml).
- Simply push this project to a GitHub repository. GitHub will automatically build `app-debug.apk` in the cloud in ~90 seconds.
- Download the generated APK directly from the **Actions** tab -> **Artifacts**!

### Method 3: Instant 1-Tap App Install on Android (PWA / WebAPK)
- Run `npm run dev` to start the game server.
- On your Android phone, open Chrome and visit the game's local IP address (e.g. `http://192.168.x.x:3000`).
- Chrome will automatically show an **"Install App"** prompt, or tap the **3 dots menu** -> **"Add to Home screen" / "Install app"**.
- Android will install the game directly as a standalone fullscreen app on your home screen with the official Auto Rickshaw app icon!

---

## 🕹️ Controls Guide

### 💻 PC Keyboard Controls:
| Key | Action |
| :--- | :--- |
| **W** or **▲** | Accelerate (Gas Pedal) |
| **S** or **▼** | Brake / Reverse Gear |
| **A** / **D** or **◀** / **▶** | Steer Left / Right (with 3-wheel leaning physics) |
| **SPACEBAR** | Handbrake (Drift around corners & U-turns) |
| **H** | Blow Desi Horn (*Pee-Poo / Tuk-Tuk / Pressure Horn*) |
| **SHIFT** | NOS Nitro Speed Booster |
| **C** | Switch Camera (*Chase 1, Far Chase, Driver Cockpit POV, Bumper*) |
| **R** | Reset Auto Rickshaw position |
| **M** | Focus Minimap |
| **ESC** | Pause Game / Workshop Menu |

### 📱 Mobile & Tablet Touch Controls:
- **Steer Buttons (◀ / ▶):** Smooth turning with authentic 3-wheeler leaning tilt.
- **Large Green Gas Pedal:** Forward acceleration.
- **Red Pedal:** Quick brake & reverse gear.
- **Yellow Handbrake Button:** Slide and drift around sharp corners.
- **Horn Button (🎺 HORN):** Instant multi-tone Indian horn.
- **NOS Button (⚡):** High-speed nitro turbo boost.
- **Top Bar Buttons:** Switch Camera (🎥), Day/Night (☀️/🌙), Rain (🌧️), Pause (⏸️).

---

## 🌟 Key Game Features

### 1. 🛺 Authentic 3D Bajaj RE Auto Rickshaw:
- Iconic metallic green lower tub, curved yellow canvas canopy, single front wheel with steering fork and handlebars, dual rear wheels with differential axle.
- Realistic chrome mirrors, front round Bajaj headlight, transparent windshield with single wiper, and rear passenger leather bench seat.
- **Real 3-Wheeler Dynamics:** When cornering at speed, the chassis dynamically leans inwards just like a real Indian auto-rickshaw!
- Functional headlights that cast real spotlight beams across the street in night mode, and glowing red brake lights.
- Passenger appears seated in the back when a ride is active.

### 2. 🏙️ Lively Indian City ("Dilwalon Ki Nagri"):
- **4-Lane MG Road:** Complete with yellow & black painted Indian kerb borders, central median dividers, and zebra crossings.
- **Overhead Metro Viaduct:** High-speed concrete rail viaduct running above the central avenue supported by massive pillars.
- **Elevated Flyover Bypass:** 2-lane highway bridge with incline ramps and road railings.
- **Bapu Bazaar Market:** Dense colorful roadside stalls, fruit crates, tea stalls with steaming kettles, and vibrant umbrellas.
- **Authentic Landmarks:** Central Railway Station (heritage dome facade), Apollo 24/7 Hospital, Gandhi Chowk (statue roundabout), Metro Station Line 1, and Auto Stand Garage.
- **Street Culture Details:** Indian trees (red Gulmohar and green Neem), roadside streetlights, and a peaceful Desi Cow resting near the divider!

### 3. 🚗 Dynamic AI Traffic System:
- DTC Green and BEST Red City Buses
- White Maruti Swift / Dzire sedans
- Black Mahindra Scorpio style SUVs
- Tata 407 Delivery Mini-Trucks with truck art
- Hero Splendor motorcycles with helmeted riders
- Other AI Auto-Rickshaws cruising the city
- **Smart AI Behavior:** Vehicles follow lane waypoints, stop at red lights, detect obstacles ahead, and honk back if blocked!

### 4. 💰 Passenger Rides & Bajaj Digital Fare Meter:
- Roadside passengers wait at hailing spots with pulsing yellow halos and waving animations.
- Stop inside the pickup marker to board passengers (*Ramesh Uncle, Pooja Student, Dr. Verma, Sharma Ji, Tourist Mike*).
- Interactive dialogues in Hindi & English appear with passenger avatars.
- **Live Fare Meter:** Base Fare (₹30.00) + Distance Fare (₹15.00/km) + Wait time fare.
- Floating 3D Navigation compass arrow on screen directs you to the passenger's destination.
- Park in the green dropoff zone to collect your fare plus safe driving tips (bonus cash for zero crashes)!

### 5. 🚦 Traffic Rules, Red Light Cameras & Challans:
- **3-State Traffic Signals:** Working Red, Yellow, Green cycles at major intersections.
- **Red Light Enforcement:** Jumping a red light triggers a camera flash effect and a traffic police challan (**-₹200**).
- **Speed Limit Zones:** Driving over 45 km/h in crowded market or hospital zones triggers a speeding fine (**-₹150**).
- **Collision Damage:** Crashing into vehicles or walls damages your rickshaw and costs repair fees.

### 6. 🏆 Career Missions & Free Roam:
- **Career Mode:**
  1. *Mission 1: Chai Chowk to Railway Station* (Rush to the train in under 120s).
  2. *Mission 2: Emergency at Apollo Hospital* (Deliver doctor safely with zero traffic fines).
  3. *Mission 3: Bapu Bazaar Market Maze* (Navigate dense stalls to Metro Station).
  4. *Mission 4: Elevated Flyover Express* (High-speed run to Central Railway).
  5. *Mission 5: King of Indian Roads* (Cross the whole city under 75s).
- **Free Roam Mode:** Endless passenger pickups, exploration, and cruising.
- **Daily Challenges:** "Flawless Driver", "Speedy Raju", and "Desi Drifter".

### 7. 🔧 Workshop & Garage Customization:
- **Engine Tuning (Lv 1 - 5):** Boosts max speed from 48 km/h to 85 km/h.
- **Throttle Response (Lv 1 - 5):** Quicker acceleration from traffic stops.
- **Disc Brakes (Lv 1 - 5):** Instant braking power.
- **NOS Cylinder (Lv 1 - 3):** High-speed turbo boost.
- **Paint Shop:**
  - Delhi NCR Green & Yellow (Default)
  - Mumbai Kaali-Peeli Taxi
  - Cyber EV Auto (Electric Cyan with neon underglow!)
  - Royal Saffron & Gold
  - Bollywood Star Pink
  - Midnight Shadow Stealth
- **Desi Decals:** "HORN OK PLEASE", "माँ का आशीर्वाद", "बुरी नज़र वाले तेरा मुँह काला", "APNA TIME AAYEGA", "KING OF ROADS".
- **Horns:** Dual-Tone Pee-Poo, Tuk-Tuk Beep, Highway Pressure Horn.
- **Auto-Save:** Cash balance, upgrades, and unlocked items persist in `localStorage`.

### 8. 🔊 Procedural Web Audio Engine (Zero External Audio Dependencies):
- Synthesized 2-stroke engine sound with realistic idle putt-putt pulse, throttle revving pitch, and exhaust resonance.
- Dual-tone Indian horns, emergency police sirens, coin collection chimes, and crash impacts.
- Works natively across all modern desktop and mobile browsers.

---

## 🛠️ Technology Stack
- **Three.js (r160):** 3D WebGL rendering, lighting, shadows, materials, and camera systems.
- **JavaScript (ES Modules):** Modular architecture for physics, traffic, rules, audio, and UI.
- **Vite:** High-performance local development and build tooling.
- **HTML5 & CSS3:** Responsive Indian truck-art styled UI, radial SVG speedometer, and touch controls.

---

## 📜 License
This project is open-source under the MIT License. Developed with pride for Indian city gaming lovers!
