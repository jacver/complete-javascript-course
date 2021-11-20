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
// book.call(lufthansa, 239, 'April Beckwith');
// book.call(eurowings, 23, 'Jacob Vernau');
// first argument is the this. keyword

// apply method
// const flightData = [583, 'April Beckwith'];
// book.apply(lufthansa, flightData);
// apply method is not as useful in modern JS in favor of spread operator to remove from array and insert into function

// Video 134 - the bind method

// const bookEW = book.bind(eurowings);
// this does not call the book function. It returns new function where this keyword is always set to eurowings
// const bookLH = book.bind(lufthansa);
// we can create one for each airline to simplify process for booking information
// bookEW(1234, 'Jacob Vernau');

// const bookEW23 = book.bind(eurowings, 23);
// setting number in stone so now we just need to call with name
// this is called partial application - parts of original function are already applied
// bookEW23('Jacob Vernau');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);

  this.planes++;
  // console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// you must manually define the this keyword by binding lufthansa. Without this, it points to the higher order function (Buy)
// must master bind method

// Partial application

const addTax = (rate, value) => value + value * rate;
// when using partial application the thing you want to preset has to be first argument!!
// console.log(addTax(0.1, 200));
// general function to add tax

const addVAT = addTax.bind(null, 0.23);
// there is no this keyword so you must set it as a null value. This allows it to read the rate you want because the first argument is always THIS keyword
// console.log(addVAT(1000));

// summary - BIND creates a new function. CALL calls the same function.

// challenge - recreate the tax example using a function that returns another function

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
// first function takes in rate, the second one needs function.
const addVAT2 = addTax2(0.23);

// lesson 135 - coding challenge

// Building a poll application

/* Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter  poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
      1.1. Display a prompt window for the user to input the number of the 
      selected option. The prompt should look like this:
      What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
1.2. Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === 'number' &&
      answer < this.answers < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
    // use case for short-circuiting on &&. If first is true it will keep going to 2nd. then 3rd if 2nd is true.

    // display resuls
    this.displayResults();
  },

  displayResults(type) {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
// without binding it to poll, the this keyword here will always point to the higher function (the query selector in this case).
*/

// video 136 - immediately invoked function expressions (IIFE)

// a function that runs once and never runs again - you dont have to save it anywhere. You don't assign it to a variable so you must trick JS into thinking it's an expression by wrapping it in (). Then to call it you add another () at the end.

(function () {
  console.log('this will never run again');
})();

(() => console.log('This will also only run once'))();

// hiding variables can be very important for data security.

{
  const isPrivate = 23;
  let isPrivate2 = 22;
  var notPrivate = 21;
}
// console.log(isPrivate, isPrivate2, notPrivate);
// creating a new scope is easily done with { } that prevents the global scope from accessing it. This is an easier, more modern way than IIFEs and why to avoid declaring with VAR as VAR ignores the scope { }

// video 137 - Closures *pretty hard concept*

// closures are not manually created - they are made automatically in certain situations so you need to know when they'll be made.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

//since secureBooking is off of the call stack how is booker able to access it and alter passengerCount? It's through a closure which forces a function remember all variables that existed when function was created.

booker();
booker();
booker();
