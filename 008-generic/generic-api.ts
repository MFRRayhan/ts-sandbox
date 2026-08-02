type User = {
  id: number;
  fullName: string;
  email: string;
};

type Product = {
  id: number;
  productName: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: "pending" | "shipped" | "delivered";
};

// async function getUser(): Promise<User[]> {
//   const data = await fetch("/api/users");
//   return data.json();
// }

// async function getProduct(): Promise<Product[]> {
//   const data = await fetch("/api/products");
//   return data.json();
// }

// async function getOrder(): Promise<Order[]> {
//   const data = await fetch("/api/orders");
//   return data.json();
// }

// const users = await getUser();
// const products = await getProduct();
// const orders = await getOrder();

/* -------------------------------------------------------------------------- */

async function get<T>(apiEndpoint: string): Promise<T> {
  const data = await fetch(apiEndpoint);
  return data.json();
}

const users = await get<User[]>("/api/users");
const products = await get<Product[]>("api/products");
const orders = await get<Order[]>("/api/orders");

users[0].email;
products[0].productName;
orders[1].status;
