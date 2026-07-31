"use strict";
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
console.log("add(2, 3) =", add(2, 3));
console.log("subtract(10, 4) =", subtract(10, 4));
console.log("multiply(5, 6) =", multiply(5, 6));
console.log("divide(20, 5) =", divide(20, 5));
