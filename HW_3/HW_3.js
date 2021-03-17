let operator = prompt('Введите оператор', '+ - * /');
let firstOperand = +prompt('Введите число');
let secondOperand = +prompt('Введите число');
let result; 

switch (operator) {
   case '+' :
   result = firstOperand + secondOperand;
   break;
   case '-' :
   result = firstOperand - secondOperand;
   break;
   case '*' :
   result = firstOperand * secondOperand;
   break;
   case '/' :
   result = firstOperand / secondOperand;
   break;
   }

alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);