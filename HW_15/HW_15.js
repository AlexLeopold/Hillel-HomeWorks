class Calculator {
   constructor() {
      this.result = 0;
   }
   plus(inp) {
      if(typeof inp === 'number') {
         return this.result += inp;
      }
   }
   minus(inp) {
      if(typeof inp === 'number') {
         return this.result -= inp;
      }
   }
   multiply(inp) {
      if(typeof inp === 'number') {
         return this.result *= inp;
      }
   }
   devide(inp) {
      if(inp === 0) {
         console.log('Делить на 0 - плохая практика!');
         return;
      }
      if(typeof inp === 'number') {
         return this.result /= inp;
      }
   }
}

class ProCalculator extends Calculator {
   square(inp) {
      if(inp && typeof inp === 'number') {
         return this.result = Math.sqrt(inp);
      } else {
         return this.result = Math.sqrt(this.result);
      }
   }
   back(inp) {
      if(inp && typeof inp === 'number') {
         return this.result = 1 / inp;
      } else {
         return this.result = 1 / this.result;
      }
   }
}

let regCalc = new Calculator;
let proCalc = new ProCalculator;