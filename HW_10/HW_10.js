const input = document.querySelector('#enterGoal');
const addButton = document.querySelector('#add');
const clearButton = document.querySelector('#clear');
const listBlock = document.querySelector('.listBlock');
const toDoList = document.querySelector('#toDoList');

addButton.addEventListener('click', addGoal);
clearButton.addEventListener('click', clearInput);
input.addEventListener("keydown", (event) => {
   switch (event.key) {
     case "Enter":
       addGoal();
       break;
     case "Escape":
       clearInput();
       break;
   }
 });

function addGoal (e) {
   let goal = document.createElement('li');
   goal.innerHTML = `${input.value}`;
   let removeButton = document.createElement('button');
   removeButton.className = 'remove';
   removeButton.innerHTML = '&#10007;'
   input.value = '';
   toDoList.appendChild(goal);
   goal.appendChild(removeButton);
   goal.addEventListener('click', () => {
      goal.classList.toggle('Done');
   })
   removeButton.addEventListener('click', () => {
      toDoList.removeChild(goal);
   })
}

function clearInput () {
   input.value = '';
}

Alex12081996leo.