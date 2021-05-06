const mainBlock = document.querySelector('#mainBlock');
const inputed = document.querySelector('#inputed');
const answer = document.querySelector('#answer');
let empty = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
let firstNum;
let secondNum;
let action;
let result = answer.innerHTML = empty;

mainBlock.addEventListener('click', e => {
   let targ = e.target.id;
   if (targ == 'plus' || targ == 'min' || targ == 'mult' || targ == 'div') {
      action = targ;
      if (result == empty) {
         firstNum = +inputed.value;
      } else {
         firstNum = result;
      }
   } else if (targ == 'equal') {
      secondNum = +inputed.value;
      if (action == 'plus') {
         result = firstNum + secondNum;
      } else if (action == 'min') {
         result = firstNum - secondNum;
      } else if (action == 'mult') {
         result = firstNum * secondNum;
      } else if (action == 'div') {
         result = firstNum / secondNum;
      }
      answer.innerHTML = result;
      action = undefined;
   } else if (targ == 'clear') {
      clearEverything();
   } else {
      return;
   }
})

function clearEverything () {
   inputed.value = '';
   result = empty;
   answer.innerHTML = result;
}