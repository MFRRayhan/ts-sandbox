"use strict";
// Find the maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}
// Find the minimum of two numbers
function min(a, b) {
    return a < b ? a : b;
}
// Check if a number is even
function isEven(num) {
    return num % 2 === 0;
}
// Calculate the square of a number
function square(num) {
    return num * num;
}
// Test the functions
console.log("max(10, 20) =", max(10, 20));
console.log("min(10, 20) =", min(10, 20));
console.log("isEven(8) =", isEven(8));
console.log("square(7) =", square(7));
