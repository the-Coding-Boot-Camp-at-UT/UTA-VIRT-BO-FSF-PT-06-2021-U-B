function Character(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

Character.prototype.printStats = function() {
    console.log("Name: " + this.name + "\nStrength: " + this.strength + "\nHitPoints: " + this.hitpoints);
    console.log("\n-------------\n");
};

Character.prototype.isAlive = function() {
    if (this.hitpoints > 0) {
        console.log(this.name + " is still alive!");
        console.log("\n-------------\n");
    } else {
        console.log(this.name + " has died!");
    }
};

Character.prototype.attack = function(opponent) {
    opponent.hitpoints -= this.strength;
    console.log(this.name + " attacked " + opponent.name + "!!")
    console.log("\n-------------\n");
};

module.exports = Character