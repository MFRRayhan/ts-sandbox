// @ Set
const fruits = new Set<string>();

fruits.add("Apple");
// fruits.add(30); // Argument of type 'number' is not assignable to parameter of type 'string'.
fruits.add("Mango");

console.log(fruits);

/* -------------------------------------------------------------------------- */

// @ Map
const players = new Map<string, number>();

players.set("Ronaldo", 7);
players.set("Messi", 10);
players.set("Neymar", 10);

console.log(players);
