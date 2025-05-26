// =======================
// Stack vs Heap in JavaScript
// =======================

// 1. Two types of memory:
// ------------------------
// Stack -> Used for **primitive** types (String, Number, Boolean, null, undefined, Symbol, BigInt)
//         A **copy** of the value is stored.

// Heap  -> Used for **non-primitive** types (Objects, Arrays, Functions)
//         A **reference** to the value is stored.


// === Stack Example ===
let s1 = "apple";
let s2 = s1; // s2 gets a copy of s1

console.log("Before changing s2:");
console.log("s1:", s1); // apple
console.log("s2:", s2); // apple

s2 = "banana"; // s2 changes, s1 remains unchanged

console.log("After changing s2:");
console.log("s1:", s1); // apple
console.log("s2:", s2); // banana


// === Heap Example ===
let user1 = {
    email: "abc@g.com",
    age: 19
};

let user2 = user1; // user2 gets a reference to the same object

user2.email = "def@gmail.com"; // Changing user2 also affects user1

console.log("After changing user2.email:");
console.log("user1.email:", user1.email); // def@gmail.com
console.log("user2.email:", user2.email); // def@gmail.com

//Summary
// ----------
// Stack: Primitive -> Copies are made -> Independent
// Heap:  Reference -> Same memory -> Changes reflect everywhere
