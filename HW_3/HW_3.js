let operator;
let operatorSymbol;
let firstOperand;
let secondOperand;
do {
   operator = prompt('Введите оператор', 'add, sub, div, mult');
} while (!
   (operator == 'add' ||
   operator == 'sub' ||
   operator == 'div' || 
   operator == 'mult' || 
   operator == null));
if (operator != null) {
   firstOperand = +prompt('Введите число');
   secondOperand = +prompt('Введите число');

operatorToSymbol(operator);

let fullExpresion = 
`${firstOperand} ${operatorSymbol} ${secondOperand} = ${calcResult(firstOperand, secondOperand)}`;
alert(fullExpresion);
}

function operatorToSymbol (x) {
   if (x == 'add') {
      operatorSymbol = '+'
   } else if (x == 'sub') {
      operatorSymbol = '-'
   } else if (x == 'div') {
      operatorSymbol = '/'
   } else if (x == 'mult') {
      operatorSymbol = '*'
   }};

   function calcResult(a, b) {
      if (operator == 'add') {
         return a + b;
      } else if (operator == 'sub') {
         return a - b;
      } else if (operator == 'div') {
         return a / b;
      } else if (operator == 'mult') {
         return a * b;
      }
   };