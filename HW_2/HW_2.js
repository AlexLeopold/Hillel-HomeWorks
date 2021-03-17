let sum = 0;
let firstQuestion = prompt('Какое самое большое животное в мире?');
if (firstQuestion === 'Синий кит') {
   sum++;
   }
let secondQuestion = prompt('Назовите формулу воды');
if (secondQuestion === 'H20') {
   sum++;
   }
let thirdQuestion = prompt('Где находится Пизанская башня?');
if (thirdQuestion === 'В Пизе' || 'Пиза') {
   sum++;
   }
let fourthQuestion = prompt('На каком языке говорят в Бразилии?');
if (fourthQuestion === 'Португальский' || 'На португальском') {
   sum++;
   }
let fifthQuestion = prompt('Как звали отца Александра Сергеевича Пушкина?');
if (fifthQuestion === 'Сергей') {
   sum++;
   }

alert('Вы нарали ' + sum + ' балла из 5');