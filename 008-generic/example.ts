const fruits: string[] = ["apple", "banana", "date", "mango", "strawberry"];
const numbers: number[] = [1, 2, 3, 4, 5];

function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const firstFruit = getFirstItem(fruits);
const firstNumber = getFirstItem(numbers);

console.log({ firstFruit, firstNumber });
