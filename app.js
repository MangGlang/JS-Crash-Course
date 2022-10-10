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

// Functions

// Arrays

// Objects

// DOM (Document-Object-Model)
