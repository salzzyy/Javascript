// =======================
// JavaScript Data Types
// =======================

// 1. Primitive Data Types (Call by Value)
// ---------------------------------------
// These store actual values and are immutable.
let str = "Hello";            // String
let num = 42;                 // Number
let isTrue = true;            // Boolean
let nothing = null;           // null
let notAssigned;              // undefined
let sym1 = Symbol('123');     // Symbol
let bigIntVal = 123456789012345678901234567890n; // BigInt

const sym2 = Symbol('123');

console.log(sym1 === sym2); // false - Symbols are unique


// 2. Non-Primitive (Reference) Data Types
// ----------------------------------------
// These store references to values (call by reference).

const fruits = ["cherry", "banana", "apple"];  // Array

let myObj = {
    name: "sals",
    teeth: 32
}; // Object

function sayHello() {
    console.log("Hello Salzzy the coder!");
} // Function


// 3. JavaScript is a Dynamically Typed Language
// ---------------------------------------------
// Variables can change types at runtime.

let value = 10;    // number
value = "text";    // now a string


// 4. typeof Operator – Know Your Types
// ------------------------------------
console.log(typeof null);          // "object" (JavaScript bug)
console.log(typeof undefined);     // "undefined"
console.log(typeof 42);            // "number"
console.log(typeof "hello");       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof Symbol());      // "symbol"
console.log(typeof BigInt(100));   // "bigint"
console.log(typeof sayHello);      // "function"
console.log(typeof fruits);        // "object"
console.log(typeof myObj);         // "object"


// 🔁 Summary (Quick Revision)
// ----------------------------
// Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
// Reference: Array, Object, Function
// JS Typing: Dynamic
// typeof null: "object" (legacy issue)
// typeof function: "function" (special object)
