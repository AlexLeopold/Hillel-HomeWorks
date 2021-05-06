function CreateRobot (name, step = 1) {
   let total = 0;
   return {
      who: function () {return name},
      step: function () {total += step},
      total: function () {return total}
   }
}

let robot = CreateRobot('Lexa', 3);
let clone = CreateRobot('Sashka');