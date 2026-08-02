const orders = new Map<string, number>();

function addOrder(drinks: string) {
  const quantity = (orders.get(drinks) ?? 0) + 1;
  orders.set(drinks, quantity);
}

addOrder("lemon");
addOrder("lemon");
addOrder("lemon");
addOrder("milkshake");
addOrder("milkshake");
addOrder("coke");
addOrder("coke");

console.log(orders);
