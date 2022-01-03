'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  // use floor here to round value down

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// video 170 - converting and checking numbers

// in JS numbers are always interpreted as floating point numbers (as decimals) regardless of how you write them.
// console.log(23 === 23.0);

// base 10 system = numbers 0-9. 1/10 = 0.1. 3/10 = 3.33333
// binary (base 2) = 0 and 1
// console.log(0.1 + 0.2);
// infinite fractions sometimes come back weird like above. This means that javascript is unable to do extremely precise calculations.

// Converting numbers

console.log(Number('23'));
console.log(+'23');
// the operator in front of the string does type coercion to make it a number

// Parsing
console.log(Number.parseInt('30px', 10), Number.parseInt('e23', 10));
// JS will parse the number out of the string. To make this work the string must start with the number. The second argument is the radix (base of the number system you are using so either 10 or 2)

console.log(Number.parseFloat('2.5rem'));
// must use float if you want decimals. Otherwise it will just give you the Integer (int). This is especially useful when reading numbers from CSS.

// These are global functions so you dont NEED to call them on Number object. However, that is old and you should call it on Number. Older example would simply be parseFloat('2.5rem')

// isNan determines if your value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(23 / 0));

// isFinite is the best way to determine if a value is a number.
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
// this one is false because the X is not parsed out so it stays a string
console.log(Number.isFinite(23 / 0));

// if you are working with floating numbers (decimals use isFinite). If you are only using integers (whole numbers) you can just use isInteger.
*/

/*
// video 171 - numbers, dates, intl, and timers

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, '23', 11, 2));
// returns highest number with type coersion, but no parsing
console.log(Math.min(5, 18, '23', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);
// calculation ofa radius using pi and parsefloat on css value

console.log(Math.trunc(Math.random() * 6 + 1));
// need to + 1 to offset truncation otherwise your values would be 0 - 5

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// 0 to 1 -> 0 to (max-min) -> min to max
console.log(randomInt(10, 20));

// rounding integers
console.log(Math.round(23.6));
console.log(Math.ceil(23.9));
console.log(Math.floor(23.9));
console.log(Math.floor(-23.4));

console.log(Math.trunc(23.9));
// trunc only removes the decimal value it does NOT round. Especially when working with negative numbers, you must use an actual rounding method.

// rounding decimals
console.log(+(2.737).toFixed(2));
// toFixed returns as a string, not a zero. The argument is how many decimal parts you want. Therefore, you must add the operator to change type.
*/

/*
// video 172 - the Remainder operator
console.log(5 % 2); //  = 1
console.log(5 / 2); // 5 = 2 * 2 + 1 so 1 is the remainder

console.log(8 % 3); // = 2
console.log(8 / 3); // 8 = 2 * 3 + 2 (remainder = 2)

// The remainder operator will return the remainder. The amount left over after division. This can check if a number is divisible by another number.

// A number is even when it's divisible by 2. The remainder of these numbers when dividing by 2 is always 0. This is a good way to check if a number is even
console.log(6 % 2);
console.log(12 % 2);

const isEven = n => n % 2 === 0; // will return true or false
console.log(isEven(6));

// If you need to do something every nth time, you can loop over using the remainder operator. Example, to change the color on every other row in movements you can do if (i % 2 === 0) {.style}
*/

/*
// video 173 - numeric separators

// 287,460,000,000 the commas are numeric seperators that make it easier to read large numbers. In JS we can use underscore _ to do the same. Ex:
const diameter = 287_460_000_000; // when logged 287460000000
const priceCents = 349_99;

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15; // underscore can only go between two numbers, not between the decimal, beginning, or end of number.

console.log(+'23_000'); // cannot use type coercion w/ underscore. When using numbers as a string or recovering from an API JS won't be able to parse number.
*/

/*
// video 174 - working with bigint

// Javascript can only reliably reproduce up to a certain amount (below). Above this number, the numbers lose precision.
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(912830912830918230981209n); // n on the end
// the n transforms a regular number into a bigint number. For very massive numbers, this allows JS to display the number accurately.
console.log(BigInt(9124091824091824091820948)); // can also use BigInt()

// operations with bigInt
console.log(10000n + 10000n); // works the exact same - numbers this small dont even need bigint
console.log(33332323420520592083n * 888888882408n);

const huge = 23022093024824829482948n;
const num = 23;
// cant mix bigint and regular numbers, must convert
console.log(huge * BigInt(num));

// exceptions
console.log(20n > 15); // true
console.log(20n === 20); // false (no type conversion with === and they arent the same type of primitive value. different 'typeof')
console.log(20n == 20); // true (loose operator does type coercion)

// division
console.log(10n / 3n); // returns 3 - closest bigint no decimal
console.log(10 / 3); // 3.33333
*/

/*
//  video 175 creating dates

// create a date (4 ways)
const now = new Date();
console.log(now);

console.log(new Date('Jan 03 2022 11:55:22'));
console.log(new Date('december 24, 2015')); // parse from str
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // year, month, day, hour, minute second - MONTH IS 0 BASED

console.log(new Date(2037, 10, 33)); // auto corrects if you put a day beyond how many are in the month

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // days to milliseconds

// dates are another type of objects and therefore have their own methods much like arrays etc.


// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // never use getYear. ALWAYS getFullYear
console.log(future.getMonth()); // zero based
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMinutes());
console.log(future.getHours());
console.log(future.toISOString()); // international standard string
console.log(future.getTime()); // timestamp is milliseconds that have passed since 1970
console.log(new Date(2142282180000)); // returns same date as above using the timestamp (milliseconds) as above

console.log(Date.now()); // returns timestamp NOW

future.setFullYear(2040);
console.log(future); // year changed to 2040 
*/
