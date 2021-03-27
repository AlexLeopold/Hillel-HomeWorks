let students = [
   { name: 'Bilbo',   grades: [6,9,9,9,10,7]},
   { name: 'Saruman', grades: [7,9,8,9,8]},
   { name: 'Frodo',   grades: [10,11,11,12]},
   { name: 'Pipin',   grades: [6,8,8,7,11]},
   { name: 'Gendalf', grades: [9,10,9,10,11,8]},
   { name: 'Legolas', grades: [8,7,8,9,8,9,9]},
   { name: 'Aragorn', grades: [9,9,10,12,10,8,9]},
 ];
let best = 0;
let worst = 12;

function calcAvGrade () {
   for (i = 0; i < students.length; i++) {
      key = students[i];
      total = key.grades.reduce((sum, cur) => (sum + cur));
      average = total / key.grades.length;
      key['av'] = average;
      console.log(`${key.name}'s average grade is ${average}`);
      if (key.av > best) {
         best = key.av;
      } else if (key.av < worst) {
         worst = key.av;
   }}
};

function chooseBestAndWorstStudent () {
for (i = 0; i < students.length; i++) {
   if (students[i].av == best) {
      console.log(`Best student - ${students[i].name} = ${students[i].av}`)
   } else if (students[i].av == worst) {
      console.log(`Worst student - ${students[i].name} = ${students[i].av}`)
   }};
};

calcAvGrade();
chooseBestAndWorstStudent();

// Немного по молдавски сделано, но хотя бы работае..)