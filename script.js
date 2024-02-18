"use strict";

/*
//Scoping In practice
// calcAge is in the Global Scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //because firstName is a global const, we can access it here
  //the const is found with the code doing a "variable Lookup"
  console.log(firstName);

  //can fin its parameters cause they r in the parent scope
  function printAge() {
    const output = `u r ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //because both firstName var are defined in different scope, they can have the same name
      const firstName = "steven";
      //js always look for the var of the current scope first
      //if it finds it, it wont look for more therefore firstName is now Steven
      const str = `and u r a millinial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //here we redifened the const output
      output = "NEW OUTPUT";
    }
    //str is out of scope cause it work parent to child not the other way around
    //thats because the above scope is a block scope
    console.log(str);
    //it does find millenial cause it's a var
    //var is a function scope while const and let are block scope thats why
    //var does not care about scope limitation
    console.log(millenial);
    // will return an error because funcitons are block scope
    //and add is in  another block that is its sibling no parent
    //it woulndt be a problem without strict mode though
    //add(2, 3); // add is not defined
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "jerome";
calcAge(1986);
//here age and printAge are out of scope
console.log(age);
printAge();
*/

/*
//Hoisting and TDZ
//hoisting with variables
console.log(me); //undefined
//job and year are still in the TDZ
//ref error cannot access before initializaiton
console.log(job);
console.log(year);

var me = "jerome";
let job = "engineer";
const year = 1986;

//hoisting with functions

console.log(addDeclaration(2, 3)); //returns 5
//addExpression and addArrow are still in the TDZ
//ref error cannot access before initializaiton
console.log(addExpression(2, 3));
console.log(addArrow(2, 3));

//function declaration
function addDeclaration(a, b) {
  return a + b;
}

//function expression
//if using a var instead of const we get another error
//addExpression is not a function error
const addExpression = function (a, b) {
  return a + b;
};

//arrow function
//if using a var instead of const we get another error
//addArrow is not a function error
const addArrow = (a, b) => a + b;

//example
//because of hoisting, numProduts is undefined
//and therefore will execute deleteShoppingCart()
//it's a hard to find bug so be carefull with that
//this would not be an issue if numProduts was a const instead of a var
if (!numProduts) deleteShoppingCart();

var numProduts = 10;

function deleteShoppingCart() {
  console.log("all products deleted");
}

//In the browser console, "window" lets you look at the global
//Variables declared with let or const do not create properties in the window object
var x = 1; // will be seen
let y = 2; // wont be seen
const z = 3; // wont be seen

//testing is a variable is a property of the window obj
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//This Keyword
console.log(this); //shows theh window obj

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined in slopy mode
};
//regular funciton call
calcAge(1986);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  //in a arrow func, this always points to the parrent scope
  console.log(this); // shows theh window obj
};
calcAgeArrow(1986);

const jerome = {
  year: 1986,
  calcAge: function () {
    //the this keyword does not point to jerome obj because its his parent
    //it does so because jerome obj is the one calling the method
    console.log(this); //jerome obj
    console.log(2037 - this.year);
  },
};
jerome.calcAge();

const matilda = {
  year: 2017,
};

//method borrowing is copying the calcAge method from jerome to matilda
//this will show the matilda obj in the browser console
matilda.calcAge = jerome.calcAge;
matilda.calcAge();

//copying the function into a new variable
const f = jerome.calcAge;
//f function is just a regular function call
//it is not attached to any obj therefore making this undefined
f(); // this will be undefined
