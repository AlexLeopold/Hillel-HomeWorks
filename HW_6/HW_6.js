const obj = {
   vector: [1,11,2,22,3,33,4,44],
   line: [2,7,11,12,19,23,31,39,44,56],
   chaos: [5,1,66,24,1,78,52,40],
   strings: ['a', 'bb', 'ass','more', 'c', 'let','smile'],
   test: {
      one: 1,
      two: 2,
      ku: {
         ku: 'epti',
         kek: 'cheburek',
      }
   },
   three: 3,
   str4: '4',
};

console.log(obj);
const newObj = clone(obj);
// const newObj = Object.assign({}, obj)
filtered(newObj);
console.log(newObj);

function clone(copy) {
   const cloned = {};
   for(let key in copy) {
         if (Array.isArray(obj[key])) {
            cloned[key] = copy[key];
         } else if (obj[key] instanceof Object) {
            cloned[key] = clone(copy[key])
         } else {
            cloned[key] = copy[key];
         }
   }
   return cloned;
}

function filtered(modified) {
   // 1
   let array = [];
   let mass = modified.vector;
   for (let i = 0; i < mass.length; i += 2) {
      array.push([mass[i], mass[i+1]])
   }
   modified.vector = array;

   // 2
   modified.line = modified.line.filter(item => item % 2 == 1); 

   // 3
   modified.chaos = modified.chaos.filter(item => item > 50);

   // 4
   modified.strings = modified.strings.filter(item => item.length >= 3);
}