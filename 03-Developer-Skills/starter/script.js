// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/* 
// problem 1 :
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day calculate the temperature amplitude. Sometimes there might be a sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// -- What is amplitude? Diff btwn highest and lowest number in array
// -- how to compute max/min in array?
// -- Ignore sensor error string

// 2) Break it into sub-problems
// - How to ignore error?
// - Find max value in array
// - Find min value in array
// - Subtract min from max and return amplitude

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // curTemp new var
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 temp arrays

// 1) Understand the problem
// -- with 2 arrays do we need funtionality twice? NO just merge both arrays at start

// 2) Break it into sub-problems
// - how to merge arrays?
// array 3 = array1.concat(array2)

const calcTempAmplitudeNew = function (t1, t2) {
  // 2 arguments 2 arrays
  const temps = t1.concat(t2); // merging array
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // curTemp new var
    if (typeof curTemp !== "number") continue; // skips strings
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celisus:")),
    value: 10,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  // 2 arguments 2 arrays
  const temps = t1.concat(t2); // merging array
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i]; // curTemp new var
    if (typeof curTemp !== "number") continue; // skips strings
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

/*
Given an array of max temps you need to display a string with the temperatures. Example: [17, 21, 23] will print "...17C in 1 days... 21C in 2 days... 23C in 3 days..."  

create function called printForecast which takes array 'arr' and logs the string to console.

test data: [17, 21, 23]
           [12, 5, -5, 0, 4]
*/
// const arr = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str = str + ` ... ${arr[i]}C in ${i + 1} days`;
//   }
//   console.log(str);
// };

// console.log(printForecast(arr));

// -----------------assignments-----------------
// const voters = function (voters) {
//   for (let i = 0; i < 50; i++) {
//     console.log(`Voter number ${i + 1} is currently voting`);
//   }
// };
// console.log(voters());
