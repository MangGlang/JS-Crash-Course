// Data Types and Variables
/* Converting Temperatures
    F = C x 1.8 + 32 */

let celsius = 10;
let fahrenheight = celsius * 1.8 + 32;

console.log(fahrenheight);

/* '==' checks if values are equal.
'===' checks if both values and types 
    are equal */
let bool = "1" == 1;
let bool2 = "1" === 1;

console.log(bool, bool2);

// Conditionals
let subscribed = false;

if (subscribed === true) {
  console.log("show the video");
} else {
  console.log("Tell User to log into account");
}

let cash = 20;
let price = 50;
let difference = cash - price;

if (cash > price)
  console.log(`you paid extra - here's ${difference} dollars change`);
else if (cash === price) console.log(`you paid the exact mount, hab nice day`);
else console.log(`not enough money, you owe ${difference * -1} dollars`);

/* 
let isStoreOpen = false;
isStoreOpen === false is the same as !isStoreOpen 
isStoreOpen === true is the same as isStoreOpen */

/* Falsy Values are...
    values that are considered 'false' when converted to a boolean:
    
    undefined, null, NaN, 0, "", false 
    
    Truthy Values are...

    defined integers, doubles, strings, "false", "0", [], and {} 
    (as you can see, exceptions are only for empty arrays and objects

    To check if a value is truthy or falsy, head over to console on inspect
    and include double "!!" before your variable.

    Example: !!"0"
*/

let val = "Minhlee";
if (val) {
  console.log(!!val);
} else {
  console.log(!!val);
}

/* Ternary Operators */
let isStoreOpen = true;
let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt";
console.log(str);

// Loops
/* DRY Principal: Don't repeat yourself */
// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count += 1;
// }

// for (let i = 0; i < 3; ++i) {
//     console.log(i);
// }

/* my way without looking at example of how to output
for (let i = 1; i <= 20; ++i) {
  if (i % 3 == 0) console.log("Frontend");
  if (i % 5 == 0) console.log("Simplified");
  if (i % 3 == 0 && i % 5 == 0) console.log(i);
  else console.log(i);
}

Solution: */
/**
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
 */
for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0)
    console.log(`${i} ->
    Frontend Simplified`);
  else if (i % 3 == 0) console.log(`${i} -> Frontend`);
  else if (i % 5 == 0) console.log(`${i} -> Simplified`);
  else console.log(`${i} -> ${i}`);
}

/** Print out every character from the string:
 * "Frontend Simplified"
 *
 * @example
 * 'F'
 * 'r'
 * 'o'
 * 'n'
 * ...
 * 'e'
 * 'd'
 */
let randomString = "Frontend Simplified";
for (let i = 0; i < randomString.length; ++i) {
  console.log(randomString[i]);
}
// since we are not reassigning randomString to anything else, you can set it to const instead of let.

// Functions
// DRY - Don't Repeat Yourself
// Function Definition
function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`);
}
// Call the function
welcomePersonToFES("Minhlee", "Lam");
welcomePersonToFES("David", "Bragg");

// new Function
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
  // return statement in a function = exits function
  // does not compile everything after
}
console.log(sumOfTwoNumbers(10, 10));

/**
 * Create a function that converts Celsius to Fahrenheight
 *
 * Formula:
 *  F = C x 1.8 + 32
 *
 * @example
 * convertCelsiusToFahrenheight(0) -> 32
 * convertCelsiusToFahrenheight(10) -> 50
 * convertCelsiusToFahrenheight(30) -> 86
 *
 */

// function convertCelsiusToFahrenheight(celsius) {
//   return celsius * 1.8 + 32;
// }
// console.log(convertCelsiusToFahrenheight(0));
// console.log(convertCelsiusToFahrenheight(10));
// console.log(convertCelsiusToFahrenheight(30));

// Another way of defining a function using "const, and "arrow function"
const convertCelsiusToFahrenheight = (celsius) => {
  return celsius * 1.8 + 32;
};
console.log(convertCelsiusToFahrenheight(0));
// notice the semicolon on the braces.

// Arrays
let arr = [20, 30, 40, 50, 100];
/* .push method adds element onto end of array:
arr.push(200);
console.log(arr);
*/

/* filter method (with long method) --> contains "call-back function" 
  syntax --> "() => {}" if a callback function has any code 
  after return statement = disregarded */
// let newArr = arr.filter((element) => {
//   // if (element < 50) {
//   //   return true;
//   // }
//   // function prints and iterates through all elements in array, and
//   // returning true = copies all elements into newArr
// });
/* filter method (short method) */
// let newArr = arr.filter((element) => element < 50);
// console.log(newArr);

/**
 * Filter out all the 'FAIL' elements in an array
 *
 * @example
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 */
let grades = ["A+", "A", "FAIL"];
// long method
/*  let finalGrade = grades.filter((grade) => {
      if (grade != "FAIL") return true;
    });
    console.log(finalGrade);
  */
// short method
/* let finalGrade = grades.filter((grade) => grade != "FAIL");
  console.log(finalGrade);
      */

/**
 * Filter out all 'FAIL' elements in an array
 * without using array.filter method
 *
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 */
let grades1 = ["A+", "A", "FAIL"];

// create empty array
let goodGrades = [];

for (let i = 0; i < grades1.length; ++i) {
  // add current element onto 'goodGrades' only if
  // current element != fail
  if (grades1[i] != "FAIL") goodGrades.push(grades1[i]);
}
console.log(goodGrades);

// Array Dot Map; Similar to Array Filter Method
// accepts call-back syntax
/* Iterates through all elements, and turns all elements 
  into "undefined" based on return line. */
// let arr1 = [1, 4, 9, 16];
// let newArr1 = arr.map((element) => {
//   console.log(element);
//   return undefined;
// });
// console.log(newArr1);

/**
 * Array Dot Map Example
 * Turn each element in an array of dollars into cents
 *
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 *
 */

let dollars = [1, 5, 10, 3];
/*
  // long method
  let dollarsToCents = dollars.map((dollar) => {
    return dollar * 100;
  });
  console.log(dollarsToCents);

  //short method
  let dollarsToCents1 = dollars.map((dollar) => dollar * 100);
  console.log(dollarsToCents1);
  */

// create empty array to hold
let dollarsToCents2 = [];

// for loop method
for (let i = 0; i < dollars.length; ++i) {
  dollarsToCents2.push(dollars[i] * 100);
}
console.log(dollarsToCents2);
// Objects

// DOM (Document-Object-Model)
