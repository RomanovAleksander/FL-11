class Fighter {
    #name;
    #damage;
    #agility;
    #health;
    #maxHealth;
    #wins;
    #losses;

    constructor({name, damage, agility, hp}) {
        this.#name = name;
        this.#damage = damage;
        this.#agility = agility;
        this.#health = hp;
        this.#maxHealth = hp;
        this.#wins = 0;
        this.#losses = 0;
    }

    getName() {
        return this.#name;
    }

    getDamage() {
        return this.#damage;
    }

    getAgility() {
        return this.#agility;
    }

    getHealth() {
        return this.#health;
    }

    attack(fighter) {
        const max = 100;
        const successRange = max - fighter.#agility;
        const impactForce = Math.floor(Math.random() * max);

        if (impactForce > successRange) {
            console.log(`${this.#name} attack missed`);
        } else {
            fighter.dealDamage(this.#damage);
            console.log(`${this.#name} make ${this.#damage} damage to ${fighter.#name}`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.#name}, Wins: ${this.#wins}, Losses: ${this.#losses}`);
    }

    heal(health) {
        this.#health = this.#health + health > this.#maxHealth ? this.#maxHealth : this.#health + health;
        console.log(`${this.#name} was healed! He has ${this.#health} hp`);
    }

    dealDamage(damage) {
        this.#health = this.#health - damage < 0 ? 0 : this.#health - damage;
    }

    addWin() {
        this.#wins++;
    }

    addLoss() {
        this.#losses++;
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0 || secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getHealth() === 0 ? secondFighter.getName() : firstFighter.getName()} is dead and can't fight!`);
        return
    }

    while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        if (firstFighter.getHealth() > 0) {
            firstFighter.attack(secondFighter)
        }
        if (secondFighter.getHealth() > 0) {
            secondFighter.attack(firstFighter)
        }
    }

    firstFighter.getHealth() > 0 ? firstFighter.addWin() : firstFighter.addLoss();
    secondFighter.getHealth() > 0 ? secondFighter.addWin() : secondFighter.addLoss();

    firstFighter.logCombatHistory();
    secondFighter.logCombatHistory();
}

const fighter1 = new Fighter({name: 'Shao Kahn', damage: 40, agility: 30, hp: 150});
const fighter2 = new Fighter({name: 'Liu Kang', damage: 20, agility: 70, hp: 100});

battle(fighter1, fighter2);
