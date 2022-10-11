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

// Arrays

// Objects

// DOM (Document-Object-Model)
