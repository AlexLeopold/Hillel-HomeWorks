function HillelStudent (name, arr) {
   this.name = name;
   this.average = function () {
      let total = 0;
       let numOnlyArr = arr.filter(item => typeof item == 'number');
      for (let key of numOnlyArr) {
         total += key;
      }
      let average = (total / numOnlyArr.length).toFixed(2);
      console.log(`Hillel Stundent ${this.name} has average ${average}`)
   }
}

let maxim = new HillelStudent ('Maxim', [100,100,100,100,97,92,100]);
let alex = new HillelStudent ('Alex', [100,100,100,99,98,100]);
let valera = new HillelStudent ('Valera', [90,80,70]);