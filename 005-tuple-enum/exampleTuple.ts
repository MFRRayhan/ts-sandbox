type Point = [number, number];

const locationOne: Point = [12, 15];
const dhakaLocation: Point = [23.733, 90.4];

console.log(locationOne);
console.log(dhakaLocation);
console.log(dhakaLocation[0]);
console.log(dhakaLocation[1]);

/* -------------------------------------------------------------------------- */

type Player = [string, string, number];

const player: Player[] = [
  ["ronaldo", "portugal", 7],
  ["messi", "argentina", 10],
];

/* -------------------------------------------------------------------------- */

type OrderItem = readonly [number, number];
const item: OrderItem = [20, 30];
// item.push(10); // error: readonly tuple হওয়ায় push(), pop(), splice() ইত্যাদি mutating method ব্যবহার করা যায় না।
console.log(item);

/* -------------------------------------------------------------------------- */

/**
 * - function থেকে tuple রিটার্ণ করা
 */

/**
 * - without Type
 */
function divide(a: number, b: number): Division {
  return [Math.floor(a / b), a % b];
}

console.log(divide(25, 2));

/**
 * - with type
 */
type Division = [number, number];

function divide2(a: number, b: number): Division {
  const quotient = Math.floor(a / b);
  const remainder = a % b;

  return [quotient, remainder];
}

console.log(divide2(7, 2));
