'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   console.log(firstName);
//   return age;
// }

// const firstName = 'Jacob';
// calcAge(1994);

// variable hoisting
// var me = 'Jacob';           // hoisted to "undefined"
// let job = 'Counselor';      // cant access before initialization
// const year = 1994;          // cant access before initialization

// function hoisting
// console.log(addDecl(2, 3));

// function addDecl(a, b) {
//   // Hoisted correctly
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
//   // error: not a function (can't call undefined b/c of var)
// };

// const addArrow = (a, b) => a + b;
// // cant access before initialization

// const jacob = {
//   firstName: 'Jacob',
//   year: 1994,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// primitive types - numbers, strings, booleans, etc - stored in call stack
// objects AKA refrence type - functions, arrays, object -- stored in heap

let age = 30;
let oldAge = age;

age = 31;
console.log(age, oldAge);

const me = {
  name: 'Jacob',
  age: '30',
};

const friend = me;

friend.age = 10;
// if you try to just change the friend's age
console.log(me, friend);
// you end up changing both ages because its tied to line not value

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('before marriage:', jessica);
console.log('after marriage', marriedJessica);
