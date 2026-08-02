const orders = new Map();

function addOrder(juice: string) {
  const qty = (orders.get(juice) ?? 0) + 1;
  orders.set(juice, qty);
}

addOrder("Lemon");
addOrder("Lemon");
addOrder("Lemon");
addOrder("MilkShake");
addOrder("MilkShake");
addOrder("ColdCoffee");

console.log(orders);
