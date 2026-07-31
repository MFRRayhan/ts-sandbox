"use strict";

// Find the maximum of two numbers
function max(a: number, b: number): number {
  return a > b ? a : b;
}

// Find the minimum of two numbers
function min(a: number, b: number): number {
  return a < b ? a : b;
}

// Check if a number is even
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Calculate the square of a number
function square(num: number): number {
  return num * num;
}

// Test the functions
console.log("max(10, 20) =", max(10, 20));
console.log("min(10, 20) =", min(10, 20));
console.log("isEven(8) =", isEven(8));
console.log("square(7) =", square(7));
