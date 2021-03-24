let consumption = [];
let days = 7;

for (i = 1; i <= days; i++) {
   consumption.push({
      meat: Math.floor(Math.random()* 40),
      rum: Math.floor(Math.random()* 40),
      day: i,
   })
}

let maxMeatDay = consumption.reduce((acc, curr) => acc.meat > curr.meat ? acc : curr);
let maxRumDay = consumption.reduce((acc, curr) => acc.rum > curr.rum ? acc : curr);

console.log(consumption);

console.log(`На ${maxMeatDay.day} было сьеденно больше всего мяса - ${maxMeatDay.meat}, 
На ${maxRumDay.day} было выпито большего всего рома - ${maxRumDay.rum}`);