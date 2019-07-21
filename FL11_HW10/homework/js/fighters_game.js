class Fighter {
    constructor({name, damage, agility, hp}) {
        this._name = name;
        this._damage = damage;
        this._agility = agility;
        this._health = hp;
        this._maxHealth = hp;
        this._wins = 0;
        this._losses = 0;
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._health;
    }

    attack(fighter) {
        const max = 100;
        const successRange = max - fighter._agility;
        const impactForce = Math.floor(Math.random() * max);

        if (impactForce > successRange) {
            console.log(`${this._name} attack missed`);
        } else {
            fighter.dealDamage(this._damage);
            console.log(`${this._name} make ${this._damage} damage to ${fighter._name}`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
    }

    heal(health) {
        this._health = this._health + health > this._maxHealth ? this._maxHealth : this._health + health;
        console.log(`${this._name} was healed! He has ${this._health} hp`);
    }

    dealDamage(damage) {
        this._health = this._health - damage < 0 ? 0 : this._health - damage;
    }

    addWin() {
        this._wins++;
    }

    addLoss() {
        this._losses++;
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0 || secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getHealth() === 0 ? secondFighter.getName() :
            firstFighter.getName()} is dead and can't fight!`);
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
