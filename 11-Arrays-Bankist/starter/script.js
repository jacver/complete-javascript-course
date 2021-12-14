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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterBegin', html);
  });
};
displayMovements(account1.movements);

// printing balance total on app
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;
  const withdrawals = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(withdrawals)} EUR`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// NOTES

// video 142 - Simple Array Methods

// Arrays are objects with access to special tools below in addition to push, pop, indexOf, length, unshift, shift, and includes

// let arr = ['a', 'b', 'c', 'd', 'e'];
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
// console.log(arr);
// now in the original array the extracted (spliced) elements are gone. They were deleted so now all that is left is ['a', 'b']. This isn't incredibly useful, but you will use it to remove the last element from an array
// arr.splice(-1);
// console.log(arr);

// arr.splice(1, 2);
// console.log(arr);
// the second parameter is different in that it's just teh number of elements you want to delete. Above you're starting from position 1 and deleting 2 elements so you're only left with ['a', 'd']

// REVERSE
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// reverse does mutate the original array.
// console.log(arr, arr2);

// CONCAT

// this is used to concatenate 2 arrays without mutating arrays
// const letters = arr.concat(arr2);
// the second array is the argument and the first one is the one it is called on. This is similar to [...arr, ...arr2]
// console.log(letters);

// JOIN
// console.log(letters.join(' - '));
// the result here is a string with the specified seperator.

/*
lesson 143 -- the new at method
this is new in ES22
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
// these both give you the same result while replacing the traditional bracket notation with the more modern .at version.

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
// These are the traditional methods for getting the last item in the array. The .at method makes this easier using the following syntax:
console.log(arr.at(-1));

// this method also works on strings
console.log('jacob'.at(-1));
*/

// video 144 - looping arrays: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
// this for of loop returns the transactions with a string. Math.abs gets the absolute value (removes negative sign)

console.log('---- FOR EACH ----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// the .forEach method returns the same thing as the for of loop with an anonymous function. The forEach gets it's instructions from the callback function. It knows to run through the array because of what you attached it to. the forEach method is easier and cleaner
// The .forEach also passes in the current element, the index, and the  entire array you are looping over so you can include those as optional arguments. The names do not matter but order does.
// You can not break out of a forEach loop so continue and break will not work. If those are crucial you must use the older for of loop. 
*/

// video 145 - Looping Arrays: forEach with maps and sets

/*
// map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// here the key is the same as the value because sets do not have keys or indexes. Key still has to be an argument though so that the forEach rules remain the same.
*/

// lecture 146 - PROJECT: Bankist App
// project overview. Use flowchart and bankist.netlify.app to play with live version. Login with user js and pin 1111.

// lecture 147: Creating DOM Elements
// bankist DOM overview. code written in top section.

// coding challenge 1 - dogs

/* Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test datasets
*/

/* test data 1 */
// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [4, 1, 15, 8, 3];

/* test data 2 */
// let dogsJulia = [9, 16, 6, 8, 3];
// let dogsKate = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   let dogsJuliaCopy = dogsJulia.slice(1, -2);
//   /* removing cats from Julia's data */
//   let dogsAll = dogsJuliaCopy.concat(dogsKate);
//   /* concatenating the arrays*/
//   dogsAll.forEach(function (age, i) {
//     if (age >= 3) {
//       console.log(`Dog ${i + 1}: This dog is a ${age} year old adult`);
//     } else {
//       console.log(`Dog ${i + 1}: This dog is a ${age} year old puppy`);
//     }
//   });
// };
// checkDogs(dogsJulia, dogsKate);

// Video 149 - Data Transformations: map, filter, reduce

// Map Method
// The map method loops over arrays similar to forEach. Map creates a brand new array based on the original array. It takes original array, each iteration is functioned on then placed into the new array. Example: if you map with current * 2, each element will be multiplied by 2 and placed into a new array. Typically more useful than forEach as it builds a new array based on original and operation.

// Filter Method
// Filters for elements in original array that satisfy a condition. Example: filtering x > 2 will create a new array of only items greater than 2.

// Reduce Method
// boils (reduces) all array elements into a single value. Example: all elements added together. Accumulator value + current has each iteration adds upon the next. AKA snowball effect.

/*
// Video 150 - the Map Method
// Brand new array will contain, in each position, the result of the callback function applied to the original function.

// objective: convert these numbers (in euros) to USD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movements);
console.log(movementsUSD);
// the above code is written using an arrow function which is less code, but can be controversial as some people think removing the function word reduces readability. Remember: 1 line of code means you dont need to type return
// using methods together with callback functions is more in line with modern "functional programming" which is preferred to older styles. You can achieve the same results with a for of loop, but it's longer.
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
// ternary operator to shorten if else
console.log(movementsDescriptions);
*/

// video 151 - computing usernames
// notes for this at top with other bankist code

// video 152 - filter method
// filter method looks for values that satisfy a certain condition determined by a callback function
/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
// all you are doing is returning a boolean
console.log(movements);
console.log(deposits);

// const depositsforOf = [];
// for (const mov of movements) if (mov > 0) depositsforOf.push(mov);
// console.log(depositsforOf);
// this is the for of looping which is less modern and unchainable.

const withdrawals = movements.filter(mov => mov < 0);
// arrow function cleaner and easier;
console.log(withdrawals);
*/

/*
// video 153 - the reduce method
// Used to boil down elements in an array to a single value (example: adding all numbers)

// accumulater is snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i + 1}: ${acc}`);
//   return cur + acc;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// arrow function versus full function above
// the 0 serves to show where you want to start adding from. Here we want zero, but you can change it to see it impact the sum and iteration 1 in the console
console.log(balance);

// Maximum value of movements array (3000). Remember, you are boiling array into 1 value, does not HAVE to be sum. You can do anything
const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov));
// use ternary operator to simplify the logic here
console.log(max);
*/

// coding challenge 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,  humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
4. Run the function for both test datasets
*/
//Test data:
//Data 1: [5, 2, 4, 1, 15, 8, 3]
//Data 2: [16, 6, 10, 5, 6, 1, 4]

// const dogAge = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function () {
//   const humanAge = dogAge.map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4));
//   console.log(humanAge);
//   // arrow function produces new array with human age for dogs
//   const adultsOnly = humanAge.filter(humanAge => humanAge >= 18);
//   console.log(adultsOnly);
//   // filtering out dogs below 18 human years
//   const avgAdultHumanAge = adultsOnly.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   console.log(avgAdultHumanAge);
//   // reduce method to find average, remember to include starting point at 0
// };
// calcAverageHumanAge(dogAge);

// video 155 - the magic of chaining methods
// Map, filter, and reduce can all be chained together. Example, take all movements, convert the currency, then add it all so you know total deposited in USD.
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const totalDepositsUSD = Math.trunc(
//   movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * eurToUsd)
//     .reduce((acc, mov) => acc + mov, 0)
// );
// console.log(totalDepositsUSD);//
// each callback function here has access to full array as an argument (arr). To debug you can log the array at each step

// Coding Challenge 3
// Rewrite Challenge 2 using arrow function

//Test data:
//Data 1: [5, 2, 4, 1, 15, 8, 3]
//Data 2: [16, 6, 10, 5, 6, 1, 4]

// const dogAge = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAgeArrow = dogAge
//   .map(ages => (ages <= 2 ? 2 * ages : 16 + ages * 4))
//   .filter(age => age >= 18)
//   .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// console.log(calcAverageHumanAgeArrow);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// Video 157 - the Find method
// the find method also accepts a callback function which is called as the method loops over the array. The method then retrieves an element of the array.
const firstWithdrawal = movements.find(mov => mov < 0);
// returns a boolean so you need a condition that will work with a true or false. A new array is NOT returned, only the first element that satisfies the condition. In this example, it will return the first withdrawal (movement below 0)
console.log(firstWithdrawal);
// Different from filter because here only 1 element is returned, not a new array. Find DOES NOT RETURN AN ARRAY
console.log(accounts);
// On this larger object that has all of our bankist accounts, now we can find something very specific
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// Here we pulled out the object that only belongs to Jessica. Very good use case for find() here. Now we can see all of Jessica's account information using a property we already know (name). Find is typically used when we only want one element or one instance where the condition can be true so we use the === operator.
*/
