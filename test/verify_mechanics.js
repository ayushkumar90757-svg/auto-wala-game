// Automated Verification Script for Auto Rickshaw Mechanics & Features
import { VehiclePhysics } from '../src/physics.js';
import { TrafficRules } from '../src/rules.js';

console.log("=== AUTO WALA: QA & PERFORMANCE VERIFICATION SUITE ===");

let allPassed = true;
function assert(condition, testName) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
  } else {
    console.error(`❌ FAIL: ${testName}`);
    allPassed = false;
  }
}

// -----------------------------------------------------------------------------
// TEST 1: Steering Inversion & Direction Verification
// -----------------------------------------------------------------------------
console.log("\n--- Testing Steering Physics & Left/Right Orientation ---");
const mockRickshaw = {
  root: {
    position: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } },
    rotation: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } }
  },
  chassis: {
    rotation: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } }
  },
  frontFork: {
    rotation: { x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; } }
  },
  spinWheels: () => {},
  updateVisuals: () => {}
};

const physics = new VehiclePhysics(mockRickshaw);
physics.reset(0, 0, 0); // facing forward (heading = 0, looking +Z)

// Test Left Turn:
// User presses LEFT -> inputs.steer = -1.0
// Speed > 0 (driving forward)
physics.speed = 10;
physics.setInputs({ throttle: 1, brake: 0, steer: -1, handbrake: false, nitro: false });
for (let i = 0; i < 15; i++) {
  physics.update(0.016);
}

// In our Three.js coordinate system (camera behind, facing +Z):
// Screen Left corresponds to +X in vehicle coordinate frame when facing +Z
// When steering LEFT (inputs.steer = -1), heading changes such that vehicle moves to world +X (Screen LEFT)
console.log(`Steering Left result: steerAngle=${physics.steerAngle.toFixed(3)}, heading=${physics.heading.toFixed(3)}, posX=${physics.position.x.toFixed(3)}`);
assert(physics.steerAngle > 0, "Steer angle is positive when input is LEFT (-1)");
assert(physics.heading > 0, "Heading rotates towards LEFT (+X)");
assert(physics.position.x > 0, "Vehicle moves to the LEFT (+X) on screen");

// Test Right Turn:
physics.reset(0, 0, 0);
physics.speed = 10;
physics.setInputs({ throttle: 1, brake: 0, steer: 1, handbrake: false, nitro: false });
for (let i = 0; i < 15; i++) {
  physics.update(0.016);
}

console.log(`Steering Right result: steerAngle=${physics.steerAngle.toFixed(3)}, heading=${physics.heading.toFixed(3)}, posX=${physics.position.x.toFixed(3)}`);
assert(physics.steerAngle < 0, "Steer angle is negative when input is RIGHT (+1)");
assert(physics.heading < 0, "Heading rotates towards RIGHT (-X)");
assert(physics.position.x < 0, "Vehicle moves to the RIGHT (-X) on screen");

// Test Responsiveness: Max steer angle reached quickly (no 350ms delay)
physics.reset(0, 0, 0);
physics.setInputs({ throttle: 1, brake: 0, steer: -1, handbrake: false, nitro: false });
physics.update(0.05); // 50ms
const steerAfter50ms = Math.abs(physics.steerAngle);
assert(steerAfter50ms > 0.2, `High steer responsiveness: reached ${(steerAfter50ms * 57.3).toFixed(1)}° in 50ms`);

// -----------------------------------------------------------------------------
// TEST 2: Traffic Signals & Stop Line Verification
// -----------------------------------------------------------------------------
console.log("\n--- Testing Traffic Signals & Stop Line Detection ---");
const mockCity = {
  trafficLights: []
};
const rules = new TrafficRules(mockCity, () => {});

// Set to 'ew_green' => NS is RED
rules.signalState = 'ew_green';
rules.timer = 5;

// Player at x: 4.5, z: 28 (approaching intersection z: 18 from south, traveling north)
const signalStatus = rules.getSignalStatus({ x: 4.5, y: 0, z: 28 }, 30);
console.log("Signal status for approaching NS red light:", signalStatus);
assert(signalStatus !== null, "Signal status detected within 45m of intersection");
assert(signalStatus.color === 'RED', "Intersection signal correctly identified as RED");
assert(signalStatus.distMeters > 0 && signalStatus.distMeters <= 12, "Stop line distance calculated accurately (approx 10m)");
assert(signalStatus.instruction.includes('STOP'), "Clear STOP instruction provided on HUD");
assert(signalStatus.needBrakeHint === true, "Brake hint triggered when approaching red signal at speed");

// Test Speed Warning:
const speedWarning = rules.getSignalStatus({ x: 4.5, y: 0, z: 80 }, 65); // away from signal, over 60 km/h
assert(speedWarning !== null && speedWarning.isSpeeding === true, "Speed limit warning triggered when exceeding speed limit");

// -----------------------------------------------------------------------------
// Final Verdict
// -----------------------------------------------------------------------------
console.log("\n------------------------------------------------");
if (allPassed) {
  console.log("🎉 ALL AUTOMATED VERIFICATION CHECKS PASSED!");
} else {
  console.error("❌ SOME CHECKS FAILED!");
  process.exit(1);
}
