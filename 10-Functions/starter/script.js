'use strict';

// lesson 128 - default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  // this is the pre-ES6 way to set defaults, after ES6 you can set them in the arguments above with "="

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

// createBooking('LH123');
// createBooking('LH123', 3);
// createBooking('LH123', undefined, 1000);
// setting an argument as undefined lets you skip and leave default

// lesson 129 - Passing Arguments: value vs. reference

const flight = 'LH234';
const jacob = {
  name: 'Jacob Vernau',
  passport: 123123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123123) {
    // alert('Check In');
  } else {
    // alert('Wrong Passport');
  }
};
// checkIn(flight, jacob);
// Flight is not overwritten by flightNum because it's primitive (string). FlightNum is just a copy of the variable so it doesnt switch the original flight variable
// Jacob is changed because it's a reference type (object). Reference type works because it's pointing to the same spot in the memory heap. Manipulating passenger object and jacob object works because they're the same object in memory heap.
// this can have serious consequences when working in large codebases with multiple devs

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000);
};

newPassport(jacob);
// checkIn(flight, jacob);
// passport is changed before it's called here so you have two functions manipulating the same object
// Javascript only has pass-by-value NOT pass-by-reference as some other languages do -- this is a tricky part of JS

// lesson 130 - first class and higher order functions

// Javascript treats functions as FIRST CLASS CITIZENS and this means that functions are simply just values or another "type" of object so they can be stored in variables or objects. They can ALSO be passed as arguments to other functions. You can also return functions from other functions.

// HIGHER ORDER FUNCTIONS - functions that receive another function as an argument or returns a new function

// example - .addEventListener('click', greet). If greet is a previously defined, addEventListener is the higher order function because it RECEIVES another function (greet) as an input. The input function is called a call-back function because it's called back by the higher order function.

// example - a function returned inside of a different function call

// lesson 131 - functions accepting callback functions - very important

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
  //replaceAll for old code reads as / /g
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function bc it accepts function (fn)
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

const high5 = function () {
  // console.log('High Five!');
};
document.body.addEventListener('click', high5);
// higher function = addEventListener, callback function = high5

['jonas', 'martha', 'adam'].forEach(high5);
// passing a callback FOR EACH of the array elements
