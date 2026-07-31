function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}

console.log(divide(25, 5));
console.log(divide(100, 10));

const result = divide(50, 3);
console.log(result.toFixed(2));

// যদি কোনো ফাংশন কোনো কিছু রিটার্ণ না করে তখন আমরা void ইউজ করবো
function multiply(a: number, b: number): void {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
}
