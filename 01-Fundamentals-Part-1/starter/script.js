/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jacob');
let myName = 'Jacob';

let myFirstJob = "Background Investigator";
let myCurrentJob = 'Counselor';

console.log(myFirstJob);

let babyBrother = 'Will'
console.log(babyBrother)

let countryMusicStar = 'toby teeth'
console.log(countryMusicStar)
*/



/*
let javascriptIsFun = true
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 15);
// console.log(typeof "woop");

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let nameOfDog = "Hugo";
if (nameOfDog === "Hugo") alert('hugo is cute');


let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";


//Math operators
const now = 2037;
const ageJacob = now - 2020;
const ageApril = now - 2004;
console.log(ageApril, ageJacob);

console.log(ageApril * 2, ageApril / 2, 2 ** 3);
// 2**3 means 2 to the power of 3 = 3*2*2*2

const firstName = 'Jacob';
const lastName = 'Vernau';
console.log(firstName + ' ' + lastName);


//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

//Comparison Operators (produce Boolean values)
console.log(ageJacob > ageApril) // > < >= <=
console.log(ageJacob >= 18);
*/



/*



const now = 2021;
const ageJacob = now - 1994;
const ageApril = now - 1989;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


const averageAge = (ageJacob + ageApril) / 2
console.log(ageJacob, ageApril, averageAge);
*/

/*Coding Challenge
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall*/

// let markWeight = 78
// let markHeight = 1.69
// let johnWeight = 92
// let johnHeight = 1.95
// let markBMI = (markWeight / markHeight ** 2)
// let johnBMI = (johnWeight / [johnHeight * johnHeight])
// let markHigherBMI = (markBMI > johnBMI);

// console.log(markBMI, johnBMI, markHigherBMI)

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
// }
// else {
//     console.log(`John's BMI (${johnBMI}) is higher than Marks (${markBMI})!`)
// }


// const firstName = 'Jacob';
// const job = 'Counselor';
// const birthYear = 1994;
// const now = 2021
// const ageJacob = now - birthYear;

// const jacob = "I'm " + firstName + ', a ' + ageJacob + ' year old ' + job

// console.log(jacob)

// const jacobNew = `I'm ${firstName}, a ${ageJacob} year old ${job}.`;

// console.log(jacobNew)
// console.log(`Just a regular String..`)

// console.log(`multi line string
// multi line string
// line 3`)

// const age = 22;
// const isOldEnough = age >= 21;

// if (isOldEnough) {
//     console.log(`You can start drinking`)
// } else {
//     const yearsLeft = 21 - age;
//     console.log(`You are ${yearsLeft} years from being old enough to drink`)
// }

// const birthYear = 2001;
// let century
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)

// // let country = 'United States'
// // const continent = 'North America'
// // const language = 'English'
// // let population = '328'
// // population++
// // let populationFinland = '6'
// // let averagePopulation = '33'

// // console.log(population > populationFinland);
// // console.log(population < averagePopulation);

// // let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language
// // console.log(description)

// // description = `${country} is in ${continent}, and it's ${[population]} million people speak ${language}.`
// // console.log(description);

// // if (population > 33) {
// //     console.log(`${country}' population is above average.'`)
// // } else {
// //     console.log(`${country}' population is below average.'`)
// }

//use above for assignments

// // type conversion
// const inputYear = `1991`;
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // type coercion
// console.log('I am ' + 23 + ' years old.')

// + operator converts Numbers to Strings
// - and / and * convert Strings to Numbers

// 5 falsy values: 0, '', undefined, null, NaN, false
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(`Jake`));
// console.log(Boolean({}));

// const money = 0;
// console.log(`9` - `5`); // 4
// console.log(`19` - `13` + `17`); // 617
// console.log(`19` - `13` + 17); // 23
// console.log(`123` < 57); // false
// console.log(5 + 6 + `4` + 9 - 4 - 2); // 1143

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// // if (hasDriversLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`someone else should drive.`)
// // }

// const isTired = false; // C

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`someone else should drive.`)
// }

// //Coding Challenge 3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 130) / 3;

// if ((scoreDolphins && scoreKoalas) < 100) {
//     console.log('Neither team met the minimum.')
// } else if (scoreDolphins < scoreKoalas) {
//     console.log('The Koalas win!');
// } else if (scoreDolphins > scoreKoalas) {
//     console.log('The dolphins win!');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('There was a tie.')
// }

// Final Assignments
// const numNeighbors = Number(prompt('How many neighbors does your country have?'));

// // if (numNeighbors === 1) {
// //     console.log('only 1 border!');
// // } else if (numNeighbors > 1) {
// //     console.log('More than 1 border!');
// // } else if (numNeighbors < 1) {
// //     console.log('No borders!');
// // }
// const english = true;
// const population = 328;
// const isIsland = false;

// if (english && population < 50 && !isIsland) {
//     console.log('Sarah should live in USA!');
// } else {
//     console.log('Sarah sohuld not live here!');
// }

// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write Code Examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid date')
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// }
// else if (day === 'tuesday') {
//     console.log('Prepare Theory videos');
// }
// else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// }
// else if (day === 'friday') {
//     console.log('Record Videos');
// }
// else if (day === 'saturday' || 'sunday') {
//     console.log('Enjoy the weekend :D');
// }

// const age = 19;
// age >= 21 ? console.log(`I like to drink wine`) :
//     console.log(`I like to drink water`);

// const drink = age >= 21 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 21 ? 'wine' : 'water'}`);

/*  CODING CHALLENGE 4
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300


const bill = 430
const tip = bill > 50 && bill < 300 ? bill * .15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);
*/

// const population = 31

// const average = population >= 33 ? `above` : `below`;
// console.log(`USA's population is ${average} average.`);

// const income = 540000

// const car = income >= 75000 ? `Tesla` : `Mazda`;
// console.log(`Since your salary is ${income}, you should drive a ${car} because you can afford it.`)