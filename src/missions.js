// AUTO WALA: Career Mode Missions & Daily Challenges
export class MissionManager {
  constructor(onMissionComplete) {
    this.onMissionComplete = onMissionComplete;
    this.activeMission = null;
    this.missionTimer = 0;
    this.missionViolations = 0;

    this.missions = [
      {
        id: 'm1',
        title: 'Mission 1: Chai Chowk to Railway Station',
        desc: 'Pick up Ramesh Uncle from Chai Adda and rush to Central Railway Station before his train departs!',
        timeLimitSec: 120,
        reward: 350,
        pickupKey: 'chai',
        destKey: 'railway',
        requiresNoChallans: false
      },
      {
        id: 'm2',
        title: 'Mission 2: Emergency at Apollo Hospital',
        desc: 'Deliver Dr. Verma to Apollo 24/7 Hospital. Obey all traffic rules and avoid red light fines!',
        timeLimitSec: 100,
        reward: 450,
        pickupKey: 'chowk',
        destKey: 'hospital',
        requiresNoChallans: true
      },
      {
        id: 'm3',
        title: 'Mission 3: Bapu Bazaar Market Maze',
        desc: 'Drive into crowded Bapu Bazaar, pick up Pooja and navigate back through traffic to Metro Station Gate 2.',
        timeLimitSec: 130,
        reward: 550,
        pickupKey: 'bazaar',
        destKey: 'metro',
        requiresNoChallans: false
      },
      {
        id: 'm4',
        title: 'Mission 4: Elevated Flyover Express',
        desc: 'Take Foreign Tourist Mike over the high-speed Flyover bypass to Central Railway Station.',
        timeLimitSec: 90,
        reward: 650,
        pickupKey: 'flyover',
        destKey: 'railway',
        requiresNoChallans: false
      },
      {
        id: 'm5',
        title: 'Mission 5: King of Indian Roads',
        desc: 'Complete the ultimate test: Drive from Metro Station across the entire city to Gandhi Chowk under 75 seconds!',
        timeLimitSec: 75,
        reward: 1000,
        pickupKey: 'metro',
        destKey: 'chowk',
        requiresNoChallans: true
      }
    ];

    this.dailyChallenges = [
      { id: 'd1', title: 'Flawless Driver', desc: 'Drive for 2 minutes without breaking a single traffic rule.', reward: 200, progress: 0, target: 120, completed: false },
      { id: 'd2', title: 'Speedy Raju', desc: 'Reach 50 km/h using NOS Nitro Booster.', reward: 150, progress: 0, target: 50, completed: false },
      { id: 'd3', title: 'Desi Drifter', desc: 'Perform 3 handbrake slides around corners.', reward: 250, progress: 0, target: 3, completed: false }
    ];
  }

  startMission(missionId) {
    const m = this.missions.find(x => x.id === missionId);
    if (!m) return null;

    this.activeMission = {
      ...m,
      timeLeft: m.timeLimitSec,
      step: 'pickup' // 'pickup' -> 'dropoff'
    };
    this.missionTimer = 0;
    this.missionViolations = 0;
    return this.activeMission;
  }

  recordViolation() {
    if (this.activeMission) {
      this.missionViolations++;
    }
  }

  update(dt, playerSpeedKmh, isHandbrake) {
    if (this.activeMission) {
      this.activeMission.timeLeft -= dt;
      if (this.activeMission.timeLeft <= 0) {
        // Mission failed due to timeout
        const failedMission = this.activeMission;
        this.activeMission = null;
        return { status: 'failed', reason: 'Time ran out! Train/Meeting missed!', mission: failedMission };
      }
    }

    // Update Daily Challenges
    this.dailyChallenges.forEach(c => {
      if (c.completed) return;
      if (c.id === 'd1') {
        c.progress += dt;
        if (c.progress >= c.target) c.completed = true;
      } else if (c.id === 'd2') {
        if (playerSpeedKmh >= 50) {
          c.progress = 50;
          c.completed = true;
        }
      } else if (c.id === 'd3') {
        if (isHandbrake && playerSpeedKmh > 20) {
          c.progress += dt * 0.8;
          if (c.progress >= c.target) c.completed = true;
        }
      }
    });

    return null;
  }

  completeActiveMission() {
    if (!this.activeMission) return null;

    const mission = this.activeMission;
    this.activeMission = null;

    if (mission.requiresNoChallans && this.missionViolations > 0) {
      return { status: 'failed', reason: 'Failed: Traffic violations occurred during VIP ride!', mission };
    }

    if (this.onMissionComplete) {
      this.onMissionComplete(mission);
    }

    return { status: 'success', reward: mission.reward, mission };
  }
}
