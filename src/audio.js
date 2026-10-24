// AUTO WALA: Procedural Web Audio API Sound Synthesizer
// Completely standalone - no external MP3/OGG asset loading required!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.volume = 0.8;

    // Engine sound nodes
    this.engineRunning = false;
    this.engineOsc1 = null;
    this.engineOsc2 = null;
    this.engineFilter = null;
    this.engineGain = null;
    this.idleNoise = null;
    this.idleGain = null;

    // Horn active state
    this.hornActive = false;
    this.hornOscs = [];
    this.hornGain = null;
    this.hornSafetyTimer = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  // Realistic 2-Stroke Indian Tuk-Tuk Engine Sound
  startEngine() {
    this.init();
    if (!this.ctx || this.engineRunning) return;
    this.resume();

    // Fundamental cylinder firing oscillator (sawtooth/pulse character)
    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc1.type = 'sawtooth';
    this.engineOsc1.frequency.setValueAtTime(32, this.ctx.currentTime);

    // Harmonic vibration oscillator
    this.engineOsc2 = this.ctx.createOscillator();
    this.engineOsc2.type = 'square';
    this.engineOsc2.frequency.setValueAtTime(64, this.ctx.currentTime);

    // Low-pass resonant filter mimicking exhaust muffler
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(180, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

    this.engineOsc1.connect(this.engineFilter);
    this.engineOsc2.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.engineOsc1.start();
    this.engineOsc2.start();
    this.engineRunning = true;
  }

  stopEngine() {
    if (!this.engineRunning) return;
    try {
      if (this.engineOsc1) { this.engineOsc1.stop(); this.engineOsc1.disconnect(); }
      if (this.engineOsc2) { this.engineOsc2.stop(); this.engineOsc2.disconnect(); }
    } catch(e) {}
    this.engineRunning = false;
  }

  // Update engine frequency based on speed (km/h) and throttle (0..1)
  updateEngine(speedKmh, throttle = 0, isReversing = false) {
    if (!this.engineRunning || !this.ctx) return;
    const now = this.ctx.currentTime;
    const absSpeed = Math.abs(speedKmh);

    // Idle is ~30Hz (putt-putt-putt), revs up to 140Hz at 80 km/h
    const baseFreq = 28 + (absSpeed * 1.35) + (throttle * 25);
    const targetFreq = Math.min(180, Math.max(26, baseFreq));

    this.engineOsc1.frequency.setTargetAtTime(targetFreq, now, 0.08);
    this.engineOsc2.frequency.setTargetAtTime(targetFreq * 1.85, now, 0.08);

    // Filter opens up as RPM rises for that throaty 2-stroke exhaust roar
    const filterCutoff = 160 + (absSpeed * 8) + (throttle * 150);
    this.engineFilter.frequency.setTargetAtTime(Math.min(950, filterCutoff), now, 0.08);

    // Volume scales with throttle
    const targetGain = 0.10 + (throttle * 0.08) + (absSpeed / 80) * 0.05;
    this.engineGain.gain.setTargetAtTime(Math.min(0.25, targetGain), now, 0.08);
  }

  // Play Desi Horns
  playHorn(tuneType = 'peepoo') {
    this.init();
    if (!this.ctx || this.hornActive) return;
    this.resume();
    this.hornActive = true;

    if (this.hornSafetyTimer) {
      clearTimeout(this.hornSafetyTimer);
    }
    // Safety auto-cutoff after 3.5 seconds to guarantee horn NEVER plays indefinitely
    this.hornSafetyTimer = setTimeout(() => {
      this.stopHorn();
    }, 3500);

    const now = this.ctx.currentTime;
    const hornGain = this.ctx.createGain();
    hornGain.gain.setValueAtTime(0.001, now);
    hornGain.gain.linearRampToValueAtTime(0.28, now + 0.02);
    hornGain.connect(this.masterGain);
    this.hornGain = hornGain;
    this.hornOscs = [];

    if (tuneType === 'peepoo') {
      // Classic Indian Dual Tone Rickshaw Horn (460 Hz + 580 Hz)
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(460, now);
      osc2.frequency.setValueAtTime(580, now);

      osc1.connect(hornGain);
      osc2.connect(hornGain);
      osc1.start(now);
      osc2.start(now);

      this.hornOscs = [osc1, osc2];
    } else if (tuneType === 'pressure') {
      // Highway Truck / Loud Multi-tone Pressure Horn
      const freqs = [380, 480, 620];
      freqs.forEach((f) => {
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, now);
        osc.frequency.setTargetAtTime(f + 20, now + 0.1, 0.05);
        osc.connect(hornGain);
        osc.start(now);
        this.hornOscs.push(osc);
      });
    } else {
      // Classic Tuk-Tuk Beep
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.connect(hornGain);
      osc.start(now);
      this.hornOscs = [osc];
    }
  }

  stopHorn() {
    if (this.hornSafetyTimer) {
      clearTimeout(this.hornSafetyTimer);
      this.hornSafetyTimer = null;
    }
    if (!this.hornActive) return;
    this.hornActive = false;

    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    if (this.hornGain) {
      try {
        this.hornGain.gain.setValueAtTime(this.hornGain.gain.value, now);
        this.hornGain.gain.linearRampToValueAtTime(0.0001, now + 0.04);
      } catch (e) {}
    }

    const oscsToStop = this.hornOscs;
    const gainToDisconnect = this.hornGain;
    this.hornOscs = [];
    this.hornGain = null;

    setTimeout(() => {
      oscsToStop.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      if (gainToDisconnect) {
        try { gainToDisconnect.disconnect(); } catch (e) {}
      }
    }, 60);
  }

  // Force stop all ongoing sounds (engine & horn) for pause, menu, or game over
  forceSilence() {
    this.stopHorn();
    this.stopEngine();
  }

  // Coin / Fare Reward Chime (Pentatonic ding)
  playCoinJingle() {
    this.init();
    if (!this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0.2, now + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.3);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.35);
    });
  }

  // Traffic Police Challan / Red Light Violation Siren
  playChallanSiren() {
    this.init();
    if (!this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.linearRampToValueAtTime(1400, now + 0.15);
    osc.frequency.linearRampToValueAtTime(800, now + 0.3);
    osc.frequency.linearRampToValueAtTime(1400, now + 0.45);
    osc.frequency.linearRampToValueAtTime(800, now + 0.6);

    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.7);
  }

  // Collision Bump Crunch Sound
  playCrashBump() {
    this.init();
    if (!this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    // Low punch
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(20, now + 0.25);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  // Nitro Boost Woosh
  playNitroWoosh() {
    this.init();
    if (!this.ctx) return;
    this.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(700, now + 0.4);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.5);
  }
}

export const sound = new SoundEngine();
