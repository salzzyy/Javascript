// =============================
// JavaScript Type Conversion & Operations
// =============================

// 💡 Backend devs often don't know the type of incoming variables, so conversion is important

let score = 33;
let points = "8";
let temp = "kl990";
let temprature = null;
let temep2 = undefined;

console.log(typeof score);     // number
console.log(typeof points);    // string
console.log(typeof temp);      // string

// 🧪 Type conversions
console.log(Number(temprature));  // 0 (null → 0 when converted to number)
console.log(Number(temep2));      // NaN (undefined → NaN)

let valueInNumber = Number(points);    // "8" → 8
let tempInNumber = Number(temp);       // "kl990" → NaN

console.log(typeof valueInNumber);     // number
console.log(typeof tempInNumber);      // number (but invalid: NaN)
console.log(tempInNumber);             // NaN


// ✅ Boolean Conversion
let isLoggedIn = 1;
let bollIsLoggedIn = Boolean(isLoggedIn); // 1 → true

let isthere = "";
let boolisthere = Boolean(isthere);       // "" → false

let isName = "saloni";
let boolisName = Boolean(isName);         // non-empty string → true

console.log(bollIsLoggedIn);  // true
console.log(boolisthere);     // false
console.log(boolisName);      // true

// 🧠 Falsy values in JS: false, 0, -0, "", null, undefined, NaN

// =============================
// JS OPERATIONS
// =============================

let value = 3;
let negVal = -value;

console.log(negVal);   // -3

let str1 = "hello";
let str2 = " world";

let str = str1 + str2;
console.log(str);      // "hello world"

// 🚨 Type coercion in operations
console.log("1" + 2);      // "12"  -> string + number → string
console.log(1 + "2");      // "12"
console.log("1" + 2 + 2);  // "122" -> left-to-right: "1"+2="12", then "12"+2="122"
console.log(1 + 2 + "2");  // "32"  -> 1+2=3, then 3+"2" = "32"
