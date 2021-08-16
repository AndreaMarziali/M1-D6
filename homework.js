/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = "today";
/*console.log(test);*/

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20;
/*console.log (sum);*/

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 20) + 1;
/*console.log(random);*/

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {"name": "Andrea", "surname": "Marziali", "age": 25};
/*console.log(me);*/

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;
/*console.log(me);*/

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
let me = {"name": "Andrea", "surname": "Marziali", "age": 25};
let skills = ["Html","CSS","JavaScript"];
/*console.log(me);*/

/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
let dice = Math.floor(Math.random()* 6) + 1;
/*console.log(dice);*/

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
let x = whoIsBigger(4, 3);

function whoIsBigger(a, b) {
  return a > b;             
}
/*console.log(myFunction);*/

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
let splitMe = "I love coding";
let splitResult = ["I","Love", "Coding"];
/*console.log(splitResult);*/

