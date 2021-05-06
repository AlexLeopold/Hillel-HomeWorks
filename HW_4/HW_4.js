let consumption = [];
let days = 7;
let maxMeatDay;
let maxRumDay;

fillObj(consumption);
maxMeatDay = consumption[0];
maxRumDay = consumption[0];
findMaxDays(consumption);

console.log(consumption);
console.log(`На ${maxMeatDay.day} было сьеденно больше всего мяса - ${maxMeatDay.meat}`); 
console.log(`На ${maxRumDay.day} было выпито большего всего рома - ${maxRumDay.rum}`);

function fillObj (obj) {
   for (i = 1; i <= days; i++) {
      obj.push({
         meat: Math.floor(Math.random()* 50),
         rum: Math.floor(Math.random()* 50),
         day: i,
      })
   }
}

function findMaxDays (obj) {
   for (i = 1; i < obj.length; i++) {
      if(obj[i].meat > maxMeatDay.meat) {
         maxMeatDay = obj[i];
      }
      if(obj[i].rum > maxRumDay.rum) {
         maxRumDay = obj[i];
      }
   }
}

//    consumption.reduce((acc,curr) => {
//    maximum.meatDay = (acc.meat > curr.meat) ? acc : curr;
//    maximum.rumDay = (acc.rum > curr.rum) ? acc : curr;
// });