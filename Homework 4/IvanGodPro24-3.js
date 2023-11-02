class Warrior {
    constructor() {
        this.level = 1;
        this.experience = 100;
        this.rank = "Pushover";
        this.achievements = [];
    }

    level() {
        return this.level;
    }

    experience() {
        return this.experience;
    }

    rank() {
        return this.rank;
    }

    achievements() {
        return this.achievements;
    }

    battle(enemy_level) {
        if (enemy_level < 1 || enemy_level > 100) {
            return "Invalid level";
        }

        const levelDifference = enemy_level - this.level;
        let experienceGain = 0;

        if (levelDifference === 0) {
            experienceGain = 10;
        } else if (levelDifference === 1) {
            experienceGain = 5;
        } else if (levelDifference >= 2) {
            experienceGain = 0;
        } else if (levelDifference <= -1) {
            experienceGain = 20 * levelDifference * levelDifference;
        }

        this.experience += experienceGain;

        if (this.experience >= 10000) {
            this.experience = 10000;
        }

        if (this.experience >= 100 * (this.level + 1)) {
            this.level += 1;
        }

        if (this.level % 10 === 0) {
            this.updateRank();
        }

        if (levelDifference >= 5 && this.rank !== "Greatest") {
            return "You've been defeated";
        }

        if (levelDifference >= 2) {
            return "An intense fight";
        } else if (levelDifference === 1) {
            return "A good fight";
        } else {
            return "Easy fight";
        }
    }

    updateRank() {
        const rankTiers = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        const rankIndex = Math.floor(this.level / 10);
        this.rank = rankTiers[rankIndex];
    }


    training(trainingEvent) {
        const [description, experience, minLevel] = trainingEvent;
        if (this.level >= minLevel) {
            this.achievements.push(description);
            this.experience += experience;
            if (this.experience >= 10000) {
                this.experience = 10000;
            }
            return description;
        } else {
            return "Not strong enough";
        }
    }
}


