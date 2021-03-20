let operator;
let firstOperand;
let secondOperand;
do {
   operator = prompt('Введите оператор', '+ - * /');
} while (!
   (operator == '+' ||
   operator == '-' ||
   operator == '*' || 
   operator == '/' || 
   operator == null));
if (operator != null) {
   firstOperand = +prompt('Введите число');
   secondOperand = +prompt('Введите число');
let calcResult = function (a, b) {
   if (operator == '+') {
      return a + b;
   } else if (operator == '-') {
      return a - b;
   } else if (operator == '*') {
      return a * b;
   } else if (operator == '/') {
      return a / b;
   }
}

let fullExpresion = 
`${firstOperand} ${operator} ${secondOperand} = ${calcResult(firstOperand, secondOperand)}`;

alert(fullExpresion);
}