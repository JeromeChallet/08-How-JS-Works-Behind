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

/*
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
*/

/*
//Regular Function VS Arrow Function
//mistake 1: arrow function as a method
var firstName = 'matilda'
const jerome = {
  firstName: 'Challet',
  year: 1986,
  calcAge: function () {
    console.log(this); //jerome obj
    console.log(2037 - this.year);

    //mistake 2: function inside a method
    //cannot read property 'year' of undefined
    // aregular funciton call has this keyword set to undefined
    //solution 1: replae the followng this with self
    //this will make sure the self/this will go up the parent scope which is calcAge
    // const self = this;
    // const isMillenial = function(){
    //   console.log(self); // undefined
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }

    //solution 2: use an arrow function
    const isMillenial = () => {
      console.log(this); // undefined
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial();
  },
  greet: () => console.log(`hey ${this.firstName}`);
};
//matilda because this parent scope is the global one
//the reason being the parent block is an object literal not a code block
//this is something to be carefull about
//therefore never ever use an arrow function as a method
jerome.greet(); //hey matilda
jerome.calcAge(); 

//each regular function get an argument keyword
const addExpression = function (a,b){
  console.log(arguments);
  return a +b; 
}
addExpression(2,5);
addExpression(2,5,8,12);

var addArrow = (a,b) => {
  console.log(arguments); //arguments is not defined
  return a+b};
  addArrow(2,5,8)
  */

//Primitives VS Objects
/*
let age = 37;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 38

const me = {
  name: "jerome",
  age: 30,
};
const friend = me;
friend.age = 27;
console.log("Friend", friend); // age=27
console.log("me", me); // age=27
*/

//primitive types
//here each primitive value gets saved into its own piece of memory in the call stack
let lastName = "williams";
let oldLastName = lastName;
lastName = "davis";
console.log(lastName, oldLastName); // williams and davis

//reference types
const jessica = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
};

//behind the scene we are just copying the reference of the call stack
//to the same object in the heap
const marriedJessica = jessica;
//we are only changing the value in the heap here
//it has nothing to do with const or let
marriedJessica.lastName = "davis";
console.log("before marriage", jessica); //jessica and davis
console.log("after marriage", marriedJessica); //jessica and davis

//now we assign a new object to married jessica
//with a constant you cannot change the value in the call stack, aka the memory address
//marriedJessica = {}; // this is not allowed

//copying object
const jessica2 = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
  family: ["alice", "bob"],
};

//merges 2 obj to create a new one
//meaning jessicaCopy is a real copy in the heap not just ref the same obj in the call stack
//object.assign only works on the 1st level, it only creates a shallow copy
//because we have an obj inside an obj, this inner obj will still be the same
//it will still point to the same place in memory
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "davis";
console.log("before marriage", jessica2); // jessica williams
console.log("after marriage", jessicaCopy); // jessica davis

//here we are manipulating an obj with an obj
//family array/obj in obj jessica2
jessicaCopy.family.push("mary");
jessicaCopy.family.push("john");

//both jessica2 and jessicaCopy have the array of family
console.log("before marriage", jessica2); //mary and john are present
console.log("after marriage", jessicaCopy); //mary and john are present
