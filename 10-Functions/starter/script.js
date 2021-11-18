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

// Lesson 132 - functions returning new functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// greeterHey('Jacob');
// greet('Hello')('Jacob');

// challenge - rewrite in arrow fn
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Hello')('Jacob');

// Lesson 133 - The CALL and APPLY methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    // adds a new object with booking info to empty bookings array
  },
};

const book = lufthansa.book;
// this creates and external function to minimize repeat code for other airlines

// lufthansa.book(1034, 'Jacob Vernau');
// lufthansa.book(3923, 'April Beckwith');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book,
};

// book(123, 'Jacob Vernau') will not work, needs to be assigned
book.call(lufthansa, 239, 'April Beckwith');
book.call(eurowings, 23, 'Jacob Vernau');
// first argument is the this. keyword

// apply method
const flightData = [583, 'April Beckwith'];
book.apply(lufthansa, flightData);
// apply method is not as useful in modern JS in favor of spread operator to remove from array and insert into function

// Video 134 - the bind method

const bookEW = book.bind(eurowings);
// this does not call the book function. It returns new function where this keyword is always set to eurowings
const bookLH = book.bind(lufthansa);
// we can create one for each airline to simplify process for booking information
bookEW(1234, 'Jacob Vernau');

const bookEW23 = book.bind(eurowings, 23);
// setting number in stone so now we just need to call with name
// this is called partial application - parts of original function are already applied
bookEW23('Jacob Vernau');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// you must manually define the this keyword by binding lufthansa. Without this, it points to the higher order function (Buy)
// must master bind method

// Partial application

const addTax = (rate, value) => value + value * rate;
// when using partial application the thing you want to preset has to be first argument!!
console.log(addTax(0.1, 200));
// general function to add tax

const addVAT = addTax.bind(null, 0.23);
// there is no this keyword so you must set it as a null value. This allows it to read the rate you want because the first argument is always THIS keyword
console.log(addVAT(1000));

// summary - BIND creates a new function. CALL calls the same function.

// challenge - recreate the tax example using a function that returns another function

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
// first function takes in rate, the second one needs function.
const addVAT2 = addTax2(0.23);
