let students = [
   { name: 'Bilbo',   grades: [6,9,9,9,10,7]},
   { name: 'Saruman', grades: [7,9,8,9,8]},
   { name: 'Frodo',   grades: [10,11,11,12]},
   { name: 'Pipin',   grades: [6,8,8,7,11]},
   { name: 'Gendalf', grades: [9,10,9,10,11,8]},
   { name: 'Legolas', grades: [8,7,8,9,8,9,9]},
   { name: 'Aragorn', grades: [9,9,10,12,10,8,9]},
 ];
 let best, worst;

 calcAvGrade();
 findBestAndWorstStudent();
 
 console.log(`Best student - ${best.name} = ${best.average}`);
 console.log(`Worst student - ${worst.name} = ${worst.average}`); 
 
 function calcAvGrade () {
    for (let key of students) {
       total = key.grades.reduce((sum, cur) => (sum + cur));
       average = total / key.grades.length;
       key['average'] = average;
       console.log(`${key.name}'s average grade is ${average}`);
    }
 };
 
 function findBestAndWorstStudent () {
    best = worst = students[0];
    for (let i = 1; i < students.length; i++) {
       if(best.average < students[i].average) {
          best = students[i];
       }
       if(worst.average > students[i].average) {
          worst = students[i];
       }
    }
 }