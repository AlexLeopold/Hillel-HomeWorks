// let animal = new Animal();
Fish.prototype = Bird.prototype = Duck.prototype = new Animal;
let goldenFish = new Fish();
let flappyBird = new Bird();
let donaldDuck = new Duck();

function Animal() {
   this.legs = 4; // количество ног
   this.canRun = true; // может бежать
   this.canBreath = true; // может дышать воздухом
}

function Fish () {
   this.canSwim = true;
   this.fins = 4;
   this.legs = 0;
   this.canRun = false;
   this.canBreath = false;
}

function Bird () {
   this.canFly = true;
   this.wings = 2;
   this.legs = 2;
   this.canRun = false;
}

function Duck () {
   this.canSwim = true;
   this.canFly = true;
   this.wings = 2;
   this.legs = 2;
}