// let film = [["Bilbo", "Ian Holm"], ["Gandalf", "Ian McKellen"], ["Aragorn","Viggo Mortensen"], ["Frodo", "Elijah Wood"], ["Legolas","Orlando Bloom"], ["Lord of The Rings"]];
// film.forEach(reaction);


// function reaction (pers, index, film) {
//    if (pers[0].length >= 6 && pers != "Lord of The Rings") {
//       alert(`${pers[1]} в роли ${pers[0]} в фильме ${film[film.length - 1][0]}`)
//    }
// }

// _______________________________________________

// function makeBuffer() {
//    var text = '';
 
//    function buffer(piece) {
//      if (arguments.length == 0) { // вызов без аргументов
//        return text;
//      }
//      text += piece;
//    };
 
//    buffer.clear = function() {
//      text = "";
//    }
 
//    return buffer;
//  };
 
//  var buffer = makeBuffer();
 
//  buffer("Тест");
//  buffer(" тебя не съест ");
//  alert( buffer() ); // Тест тебя не съест
 
//  buffer.clear();
 
//  alert( buffer() ); // ""

// _______________________________________________

// function makeCounter() {
//    let count = 0;
//    return function() {
//      return count++;
//    };
//  }
 
//  let counter1 = makeCounter();
//  let counter2 = makeCounter();

//  alert(  makeCounter() ); // 0
//  alert(  makeCounter() ); // 0
//  alert(  makeCounter() ); // 0

//  alert( counter1() ); // 0
//  alert( counter1() ); // 1
 
//  alert( counter2() ); // 0 (независимо)

// _______________________________________________

// let name = "Иван";
// let user1 = {
//    name: "Джон",
//    age: 30,
//    sayHi: say,
//  };

// let user2 = {
//    name: "Брэд",
//    age: 29,
//    sayHi: say,
// };

// let user3 = {
//    surname: "Малькольм",
//    age: 50,
//    sayHi: say,
// }
 
//  user1.sayHi(); // Джон
//  user2.sayHi(); // Брэд

// function say () {
//    alert(this.name)
// }

// _______________________________________________

