const mainBlock = document.querySelector('#mainBlock');
const inputed = document.querySelector('#inputed');
let action;
let result;

mainBlock.addEventListener('click', e => {
   let targ = e.target.id;
   if (targ == 'plus' || targ == 'min' || targ == 'mult' || targ == 'div') {
      action = targ;
      result = +inputed.value;
   } else if (targ == 'equal' && action !== undefined) {
      if (action == 'plus') {
         result += +inputed.value;
      } else if (action == 'min') {
         result -= +inputed.value;
      } else if (action == 'mult') {
         result *= +inputed.value;
      } else if (action == 'div') {
         result /= +inputed.value;
      }
      action = undefined;
   } else if (targ == 'square') {
      result = Math.sqrt(+inputed.value);
   } else if (targ == 'back') {
      result = 1 / (+inputed.value);
   } else if (targ == 'clear') {
      result = '';
   } else {
      return;
   }
   inputed.value = result;
})