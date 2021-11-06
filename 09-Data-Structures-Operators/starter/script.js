'use strict';

//Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Working with Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

// methods on strings include .length, .indexOf, .lastIndexOf which can be used as arguments for the slice method

console.log(airline.slice(4));
// the parameter dictates the position the extraction starts. So above it will extract everything after position 4 which produces "Air Portugal" as a substring
console.log(airline.slice(0, airline.indexOf(' ')));
// slices from first position to the first occurance of a space
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// slices from last occurance of space to end of string. the +1 makes sure it doesnt actually include the space
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
// parameters can be negative which runs it from the end

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
  else console.log('You got lucky :)');
};

checkMiddleSeat('11B');
// This function is case sensitive!
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Sets - data structure w unique values - no repeats
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
// when this set, with duplicates, is logged the duplicates will not show. Each unique value reads once.
// if you pass in a string, each letter will show as its own value.
// sets are iterable so you can loop over them (for-of)
// to transform into an array use spread operator

// maps - data structure w keys of any type (not just str)
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest
  .set(1, 'Firenze, Italy')
  .set(2, 'Lisbon, Portugal')
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
// set method returns updated map so it can be chained like above
// console.log(rest.get('name'));
// .get retrieves data
const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// this example illustrates boolean map keys, but is not very clean code
// other method names are .delete and .has and .clear

// rest.set([1, 2], 'Test');
// array as key works, but must be delcared first because of where its stored on the stack. Above wont work, use below
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// arr must be pre-defined to retrieve - this process is useful for DOM elements

const question = new Map([
  ['Question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'try again'],
]);
// this way is a bit better than .set method as it's less cumbersome when creating a map from scratch -- first position in array is key, second is value -- SAME as object.entries

// converting objects to maps
const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// map iteration
// Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));

// const response =
//   answer === 3
//     ? console.log(question.get(true))
//     : console.log(question.get(false));
// console.log(response);
// my attempt is above - it works, but is not efficient. See below for better version

// console.log(question.get(question.get('correct') === answer));

// -------optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon?.open);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// doesnt include 0 or empty strings so 0 wont ruin return
const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/*

// logical operators can USE and RETURN any data type - also use short circuit evaluation
console.log(3 || 'Jacob');

// restaurant.orderPizza('Cheese', 'Bacon', 'Pepperoni');
// cheese becomes main ing and subsequent are placed into array

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);

// // functions
// const add = function (...numbers) {
//   // rest syntax takes multiple numbers and packs them into array
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x);
// console.log(x);

// arrays

// SPREAD on RIGHT side of operator (=)
// const arr = [1, 2, ...[3, 4]];
// spread unpacks nested array and merges into one

// REST on LEFT side of operator (=)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// rest collects the unused variables (3, 4, 5)

// const [pizza, , risotto, ...others] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, others);

// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr];
// // console.log(newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// // console.log(newMenu);

// // copying array
// const mainMenuCopy = [...restaurant.mainMenu];

// // joining 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(menu);

// // iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];

// // console.log(...str);

// // real example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// // console.log(newRestaurant);

// const restraurantCopy = { ...restaurant };
// restraurantCopy.name = 'Ristorante Roma';
// // console.log(restraurantCopy.name);
// // console.log(restaurant.name);

// // destructuring objects

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Via del Sole, 21',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);

// // mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// // console.log(a, b);

// // destructuring nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(open, close);

// // destructuring arrays

// // const arr = [2, 3, 4];

// let [x, y, z] = arr;
// // console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);
// [main, secondary] = [secondary, main];

// // receiving 2 returned values from the order function
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// // destructuring inside of destructuring
// // console.log(i, j, k);

// // Default values by using =1 if you don't know array length
// const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);
*/

// Coding Challenge 1 - soccer betting

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
// destructed game.players
const [gk, ...fieldPlayers] = players1;
// first player (pos 1) is goalie, rest op lumps others together
const allPlayers = [...players1, ...players2];
// spread operator on both to merge arrays
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// spread operator + new strings merges all into 1 array

const { team1, x: draw, team2 } = game.odds;
// x: draw renames it in the declaration
// console.log(team1, draw, team2);

const printGoals = function (...goals) {
  console.log(`${goals} scored for a total of ${goals.length}`);
};
// printGoals('Jake', 'April');
// goal scorer and total goals printed to console not in an array

// team1 < team2 && console.log('Team 1 is more likely to win');
// Or operator short circuits and stops when first value is true, if you use and operator it will continue when first is true.
team1 > team2 && console.log('Team 1 is more likely to win');
// this short circuits so it does not get logged. If you flip values on team 1 and team 2 above this one will log and the first wont.

/*
// challenge 2
// 1)
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}
// object.entries to get keys AND values. Converted goal to NUM for string so that array didn't start at zero. Could also do game.scored.entries()
// 2)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(`The average odds for the ${odds.length} wagers is ${average}`);
// define average and set it to 0. Pull the odds out and have it added to average on each loop. Then divide by odds.length (3) for average
// 3)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory for ${game[team]}`;
  console.log(`Odds of ${teamStr}: ${odd}`);
}
// here you use a ternary operator in teamStr so it changes output based on team name. Remember object.entries for objects and game.scored.entries for arrays
*/

// // --- challenge 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);
// // 1. Create an array 'events' of the different game events (no duplicates)

// const arr = [];
// // create an empty array to push values into
// for (const [key, value] of gameEvents) {
//   arr.push({ key, value });
// }
// // values are pushed by key/value pair
// console.log(arr);

// // 2. After the game has finished, remove the yellow card from 64'
// gameEvents.delete(64);
// // delete using key (first value which in this case is minute)

// // 3. Compute and log 'An event has happened, on average, every 9 minutess
// const avgEvent = function () {
//   const average = 90 / gameEvents.size;
//   console.log(`An event has happened, on average, every ${average} minutes.`);
// };
// avgEvent();
// // Compute the average using a function with .size - if .size changes you won't need to alter function.

// // 4. Loop over gameEvents and log each element to console, marking whether it was first or second half like this: [FIRST HALF] 15': -EVENT-

// for (let [key, value] of gameEvents) {
//   key <= 45
//     ? console.log(`[FIRST HALF] ${key}': ${value}`)
//     : console.log(`[SECOND HALF] ${key}': ${value}`);
// }
// // Here you do a for loop OVER game events by defining key and value. Then use a ternary operator to do a simple if-else and return the half.
