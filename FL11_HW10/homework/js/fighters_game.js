class Fighter {
    constructor({name, damage, agility, hp}) {
        this.name = name;
        this.damage = damage;
        this.agility = agility;
        this.health = hp;
        this.wins = 0;
        this.losses = 0;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getAgility() {
        return this.agility;
    }

    getHealth() {
        return this.health;
    }

    attack(fighter) {
        const max = 100;
        const successRange = max - fighter.agility;
        const impactForce = Math.floor(Math.random() * max);

        if (impactForce > successRange) {
            console.log(`${this.name} attack missed`);
        } else {
            fighter.dealDamage(this.damage);
            console.log(`${this.name} make ${this.damage} damage to ${fighter.name}`);
        }
    }

    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.wins}, Losses: ${this.losses}`);
    }

    heal(health) {
        this.health = this.health + health;
        console.log(`${this.name} was healed! He has ${this.health} hp`);
    }

    dealDamage(damage) {
        this.health = this.health - damage < 0 ? 0 : this.health - damage;
    }

    addWin() {
        this.wins++;
    }

    addLoss() {
        this.losses++;
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.health === 0 || secondFighter.health === 0){
        console.log(`${secondFighter.health === 0 ? secondFighter.name : firstFighter.name} is dead and can't fight!`);
        return
    }

    while (firstFighter.health > 0 && secondFighter.health > 0) {
        if (firstFighter.health > 0) {
            firstFighter.attack(secondFighter)
        } if (secondFighter.health > 0) {
            secondFighter.attack(firstFighter)
        }
    }

    firstFighter.health > 0 ? firstFighter.addWin() : firstFighter.addLoss();
    secondFighter.health > 0 ? secondFighter.addWin() : secondFighter.addLoss();

    firstFighter.logCombatHistory();
    secondFighter.logCombatHistory();
}

const fighter1 = new Fighter({name: 'Shao Kahn', damage: 40, agility: 30, hp: 150});
const fighter2 = new Fighter({name: 'Liu Kang', damage: 20, agility: 70, hp: 100});

battle(fighter1, fighter2);
