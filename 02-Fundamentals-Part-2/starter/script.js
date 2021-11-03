'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 12;

// function logger() {
//     console.log('My name is Jacob');
// }

// // using the function is called calling, running, or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// }

// console.log(yearsUntilRetirement(1991, 'Jacob'));

///////////Assignments//////////

// // function describeCountry(country, population, capitalCity) {
// //     let description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
// //     return description
// // }

// // const USA = describeCountry('USA', 328, 'Washington DC');
// // console.log(USA)

// // const colombia = describeCountry('Colombia', 90, 'Bogota');
// // console.log(colombia)

// // const italy = describeCountry('Italy', 100, 'Rome');
// // console.log(italy);

// function percentageOfWorld1(population) {
//     const worldPop = 7900;
//     const percentage = population / worldPop * 100;
//     return percentage;
// }

// let usaPop = percentageOfWorld1(328);
// let germanyPop = percentageOfWorld1(83);
// let colombiaPop = percentageOfWorld1(50);
// console.log(usaPop, germanyPop, colombiaPop);

// const percentageOfWorld2 = function (population) {
//     const worldPop = 7900;
//     const percentage = population / worldPop * 100;
//     return percentage;
// }

// let usaPop2 = percentageOfWorld2(328);
// let germanyPop2 = percentageOfWorld2(83);
// let colombiaPop2 = percentageOfWorld2(50);
// console.log(usaPop, germanyPop, colombiaPop);


// const percentageOfWorld3 = population => {
//     const worldPop = 7900;
//     const percentage = population / worldPop * 100;
//     return percentage
// }

// let usaPop3 = percentageOfWorld3(328);
// let germanyPop3 = percentageOfWorld3(83);
// let colombiaPop3 = percentageOfWorld3(50);
// console.log(usaPop, germanyPop, colombiaPop);


// RANDOM TRASH ////////////////////////////////////////////

// const describeCountry = function (country, population, capitalCity) {
//     return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`)
// }

// describeCountry(`USA`, 328, `Washington DC`)

// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }

// const age1 = calcAge1(1994);

// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }

// const age2 = calcAge2(1994);
// console.log(age1, age2);

// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} has ${retirement} years until retirement.`
// }

// console.log(yearsUntilRetirement(1930, `Jacob`));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement >= 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} already retired.`);
//         return -1
//     }
// }

// console.log(yearsUntilRetirement(1994, 'Jacob'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// ------------------------- Arrays ------------------------

// const friends = ['Jacob', 'Nick', 'EJ', 'Braden']; /// most common way
// const cars = new Array(`CX5`, `Rav4`, 'Taurus');    /// calling a NEW array
// console.log(friends);

// console.log(friends[0]); // Arrays are 0 based
// console.log(friends[friends.length - 1]);  // length is not 0 based so -1 accounts for that

// friends[2] = 'Joey';  // You can mutate array values (-EJ + Joey) can't change entire thing
// console.log(friends);

// const jacob = ['Jacob', 'Vernau', 'Counselor', 2021 - 1994, [friends]];

// const calcAge4 = function (birthYear) {
//     return 2021 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];  //    new array
// const age1 = calcAge4(years[0]);         //    calling function w/ array
// const age2 = calcAge4(years[years.length - 1]);
// console.log(age1, age2);

// const ages = [calcAge4(years[0]), calcAge4(years[1]), calcAge4(years[years.length - 1])];
// console.log(ages);

// ````````````````````````Adding to arrays & removing from arrays `````````````````````

// friends.push('Jeremiah'); // adds to end
// friends.unshift('Brian'); // adds to beginning
// console.log(friends)

// friends.pop(); // removes last element from array - no () input 
// friends.shift(); // removes first element - no () input

// console.log(friends);

// console.log(friends.indexOf('Jacob')); // returns position in array in this case 0
// console.log(friends.indexOf('Hugo')); // returns -1 since Hugo isnt in array

// console.log(friends.includes('Nick')); // returns True since Nick is in the array
// console.log(friends.includes('Kyle')); // returns false since Kyle is not in the array

// // these functions do not use type coercion - they are strict 

//             ```````````````````objects`````````````````````

// objects are data structures for less structured data that you can name and retrieve

// const jacob = {   // curly braces
//     firstName: 'Jacob',
//     lastName: 'Vernau',
//     age: 2021 - 1994,
//     job: 'Counselor',
//     friends: ['Nick', 'Braden', 'EJ', 'Joey']
// }

// console.log(jacob)

// console.log(jacob.lastName);   //  dot notation to retrieve property from object
// console.log(jacob['lastName']); //  bracket notation can have any expression (ie operation)

// const nameKey = 'Name';                // takes the similar part 
// console.log(jacob['first' + nameKey]); // concatenates it to make firstName and lastName
// console.log(jacob['last' + nameKey]);   // [] brackets can have ANY expression

// const interestedIn = prompt('What do you want to know about Jacob? Choose between firstName, lastName, age, job, and friends.');

// if (jacob[interestedIn]) {
//     console.log(jacob[interestedIn]);
// } else {
//     console.log('wrong request');              // undefined is falsey 
// }

// jacob.location = 'Colorado';   // adding with dot notation
// jacob['height'] = '5 foot 9 inches';

// console.log(jacob.location, jacob.height)``


// ```````````````````````````````````````OBJECTS`````````````````````````````````

// const jacob = {   // curly braces
//     firstName: 'Jacob',
//     lastName: 'Vernau',
//     birthYear: 1994,
//     job: 'Counselor',
//     friends: ['Nick', 'Braden', 'EJ', 'Joey'],
//     hasDriversLicense: false,

// calcAge: function (birthYear) {          // a function attached to an object is a METHOD
//     return 2021 - birthYear
// }

// calcAge: function () {
//     // console.log(this);              // this key refers to the THIS object
//     return 2021 - this.birthYear;      // good for clean code
// }

//     calcAge: function () {
//         this.age = 2021 - this.birthYear
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
//     }

// }
// console.log(jacob.calcAge());        // needs to be run only once
// console.log(jacob.age);

// // console.log(jacob['calcAge'](jacob.birthYear))    // bracket notation - MAKE STRING

// console.log(jacob.getSummary())

// `````````````````````````````````````Iteration: The For Loop ``````````````````````````

// For loop runs on a timer while the logical condition is TRUE


// // for(COUNTER VARIABLE ; CONDITION ; COUNTER VARIABLE UPDATE)
// for (let rep = 1; rep <= 2; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
// }

// ````````````````````````````` LOOPING ARRAYS, BREAKING, AND CONTINUING `````````````

// const jacob = [// curly braces
//     'Jacob',
//     'Vernau',
//     2021 - 1994,
//     'Counselor',
//     ['Nick', 'Braden', 'EJ', 'Joey']
// ];

// const types = [];

// // i is common counter variable
// // arrays start at 0 dont forget so i=0 and i<5 because youre counting 0-4 
// // by using .length you dont have to manually input end counter

// for (let i = 0; i < jacob.length; i++) {
//     // reading from jacob array
//     console.log(jacob[i], typeof jacob[i]);

// filling a new array from another
// types[i] = typeof jacob[i];  // type at position i === jacob at position i

// filling a new array from another style 2 
//     types.push(typeof jacob[i]);
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020];   // array containing birth years
// const ages = [];                          // new empty array to be filled


// for (let i = 0; i < years.length; i++) {
//     // ages[i] = 2021 - years[i];             // one way          
//     ages.push(2021 - years[i]);               // best way. need () because push is a func
// }
// console.log(ages);

// //             continue and break statements 
// //  continue - exit current loop iteration and continue to next one GOOD FOR STRINGS
// // break - terminates entire loop

// for (let i = 0; i < jacob.length; i++) {
//     if (typeof jacob[i] !== 'string') continue;           // skips any non-strings
//     console.log(jacob[i], typeof jacob[i]);
// }

// for (let i = 0; i < jacob.length; i++) {
//     if (typeof jacob[i] === 'number') break;         // logs nothing after finding a number
//     console.log(jacob[i], typeof jacob[i]);
// }

// const jacob = [// curly braces
//     'Jacob',
//     'Vernau',
//     2021 - 1994,
//     'Counselor',
//     ['Nick', 'Braden', 'EJ', 'Joey']
// ];

// for (let i = jacob.length - 1; i >= 0; i--) {    // length is 5 so you need -1 to run 4 to 0
//     console.log(jacob[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`STARTING EXERCISE ${exercise}.`);

//     for (let rep = 1; rep < 7; rep++) {
//         console.log(`excercise ${exercise}, rep ${rep}.`)
//     }
// }


// `````````````````````` WHILE LOOP ```````````````````
// runs WHILE the condition is true, does not always need a counter. Just a true condition
// good for problems without counters

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights rep ${rep}.`);
//     rep++;
// }

// roll dice UNTIL you get a 6. No idea how long it will take so theres no counter variable

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}.`);
//     let dice = Math.trunc(Math.random() * 6) + 1;  //reassigns dice after iteration to avoid infinite loop
// }




// -----------------ASSIGNMENTS ------------------------------
// function describeCountry(country, population, capitalCity) {
//     console.log(`${country} has ${population} million people and it's capital city is ${capitalCity}.`);
// }

// const descColombia = describeCountry('Colombia', 50, 'Bogota');
// const descGermany = describeCountry('Germany', 80, 'Berlin');
// const descPortugal = describeCountry('Portugal', 33, 'Lisbon');
// console.log(descColombia, descGermany, descPortugal);

// function percentageOfWorld1(population) {
//     return (population / 7900 * 100)
// }

// const colombiaPercent = (percentageOfWorld1(50));
// const germanyPercent = (percentageOfWorld1(80));
// const portugalPercent = (percentageOfWorld1(33));
// console.log(colombiaPercent, germanyPercent, portugalPercent);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900 * 100);
// }

// const colombiaPercent2 = (percentageOfWorld2(50));
// const germanyPercent2 = (percentageOfWorld2(80));
// const portugalPercent2 = (percentageOfWorld2(33));
// console.log(colombiaPercent2, germanyPercent2, portugalPercent2);

// const percentageOfWorld3 = population => (population / 7900 * 100)

// const colombiaPercent3 = (percentageOfWorld3(50));
// const germanyPercent3 = (percentageOfWorld3(80));
// const portugalPercent3 = (percentageOfWorld3(33));
// console.log(colombiaPercent3, germanyPercent3, portugalPercent3);

// const populations = [1441, 328, 80, 50];
// console.log(populations.length === 4);

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
// console.log(percentages);

// const neighbors = ['Canada', 'Mexico'];
// neighbors.push('Utopia');                        // .push to add to end
// neighbors.pop('Utopia');                         // .pop to pop it out of the array

// if (!neighbors.includes('Germany')) {
//     console.log('Probably not a central european country');
// }

// neighbors[1] = 'New Mexico';          // change mexico to new mexico

// neighbors[neighbors.indexOf('Canada')] = 'Arctic';   // another way to change using index
// console.log(neighbors);

// const myCountry = {
//     country: 'United States',
//     capital: 'Washington, DC',
//     language: 'english',
//     population: 328,
//     neighbors: ['Canada', 'Mexico']
// }

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries (${myCountry.neighbors[0]} & ${myCountry.neighbors[1]}) and a capital city called ${myCountry.capital}.`)


// --------------------------Coding Challenges ---------------------------

//                                    1

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// const avgD = calcAverage(85, 54, 41);
// const avgK = calcAverage(23, 34, 27);

// function checkWinner(scoreD, scoreK) {
//     if (scoreD > scoreK * 2) {
//         console.log(`Dolphins win (${scoreD} v ${scoreK}).`);
//     } else if (scoreK > scoreD * 2) {
//         console.log(`Dolphins win (${scoreK} v ${scoreD}).`);
//     }
//     else {
//         console.log(`No team wins`)
//     }
// }

// console.log(checkWinner(avgD, avgK))

//                                    2

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * .15;
//         return tip                            // This can be shortened with ? : if/then
//     } else {                                  // see below
//         const tip = bill * .20;
//         return tip
//     }
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips)

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total)


// write Jacob has 3 friends, and his best friend is called Nick using only dynamic code


// const jacob = {
//     firstName: 'Jacob',
//     friends: ['Nick', 'EJ', 'Braden']
// }
// console.log(`${jacob.firstName} has ${jacob.friends.length} friends, and his best friend is called ${jacob.friends[0]}.`);

// // ``````````````````````````````````` 3 `````````````````````````````````````

// `````````````````````````````````````4`````````````````````````````````````````

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)
    const total = tips[i] + bills[i];
    totals.push(total);
}

console.log(bills, tips, totals)

