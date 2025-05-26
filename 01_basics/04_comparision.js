// =======================
// JavaScript Comparison Operators
// =======================

// ✅ Basic Comparisons
console.log(2 > 2);       // false
console.log(2 >= 1);      // true
console.log(2 > 1);       // true
console.log(2 != 1);      // true


// ✅ Type Coercion in Comparisons
// When a string is compared to a number, JavaScript tries to convert the string to a number
console.log("2" > 1);     // true -> "2" becomes 2
console.log("02" > 1);    // true -> "02" becomes 2

// ❗ Weird Cases: null and undefined

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true 😵‍💫

// Explanation:
// - `null >= 0` => true, because `null` is converted to `0` in numeric comparison
// - But `null > 0` => false, and `null == 0` => false
// - Confusing, right? Avoid loose equality when possible!

console.log(undefined == 0);  // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// ✅ Strict Equality Check (no type conversion)
console.log("2" === 2);   // false -> data types are different (string vs number)

// ✅ Use === instead of == for safer comparisons
