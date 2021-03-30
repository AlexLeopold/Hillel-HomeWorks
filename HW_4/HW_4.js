let consumption = [];
let days = 7;
let maxMeatDay;
let maxRumDay;

for (i = 1; i <= days; i++) {
   consumption.push({
      meat: Math.floor(Math.random()* 40),
      rum: Math.floor(Math.random()* 40),
      day: i,
   })
}

consumption.reduce((acc,curr) => {
   maxMeatDay = acc.meat > curr.meat ? acc : curr;
   maxRumDay = acc.rum > curr.rum ? acc : curr;
   return maxMeatDay, maxRumDay;
});

console.log(consumption);

console.log(`На ${maxMeatDay.day} было сьеденно больше всего мяса - ${maxMeatDay.meat}, 
На ${maxRumDay.day} было выпито большего всего рома - ${maxRumDay.rum}`);