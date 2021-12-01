'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// NOTES

// video 142 - Simple Array Methods

// Arrays are objects with access to special tools below in addition to push, pop, indexOf, length, unshift, shift, and includes

let arr = ['a', 'b', 'c', 'd', 'e'];
// test array

// SLICE method

// console.log(arr.slice(2));
// slice does not mutate the original array. It returns a new array with only the extracted parts. The argument is the beginning parameter so this example will slice from position 2 to the end ['c', 'd', 'e']
// console.log(arr.slice(2, 4));
// you can define the end parameter, but it is not included in the output, so this example will give you ['c', 'd']
// console.log(arr.slice(-1));
// negative parameter starts from the end of the array so -1 is always just the last element of the array. You can also use negative end parameters to the same effect
// console.log(arr.slice(1, -2));

//calling slice with no arguments will produce a shallow copy of any array. Similar to what you can do with spread operator with [...arr]. Choosing which you do is user decision. Slice is chainable which can be a good feature
// console.log(arr.slice());

// SPLICE method

// splice actually mutates the original array
// console.log(arr.splice(2));
console.log(arr);
// now in the original array the extracted (spliced) elements are gone. They were deleted so now all that is left is ['a', 'b']. This isn't incredibly useful, but you will use it to remove the last element from an array
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);
// the second parameter is different in that it's just teh number of elements you want to delete. Above you're starting from position 1 and deleting 2 elements so you're only left with ['a', 'd']

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
// reverse does mutate the original array.
console.log(arr, arr2);

// CONCAT

// this is used to concatenate 2 arrays without mutating arrays
const letters = arr.concat(arr2);
// the second array is the argument and the first one is the one it is called on. This is similar to [...arr, ...arr2]
console.log(letters);

// JOIN
console.log(letters.join(' - '));
// the result here is a string with the specified seperator.
