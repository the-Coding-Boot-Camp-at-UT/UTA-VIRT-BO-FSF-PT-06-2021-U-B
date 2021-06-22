const Character = require("./rpg-tdd")

let yogi = new Character("Dhalsim", 20, 65);
let mutant = new Character("Blanka", 30, 50);

yogi.printStats();
mutant.printStats();

mutant.attack(yogi);
yogi.printStats();
yogi.isAlive();

yogi.attack(mutant);
mutant.printStats();
mutant.isAlive();