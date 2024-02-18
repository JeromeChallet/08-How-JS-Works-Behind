"use strict";

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
