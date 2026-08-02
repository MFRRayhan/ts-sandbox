// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// let lastId: number = 0;
// const users: User[] = [];

// function addUser(name: string, email: string): User {
//   const user: User = {
//     id: ++lastId,
//     name,
//     email,
//   };

//   users.push(user);
//   return user;
// }

// addUser("Rayhan", "rayhan@gmail.com");
// addUser("Borhan", "borhan@gmail.com");
// console.log(users);

/* -------------------------------------------------------------------------- */

// - Omit Example

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// let lastId: number = 0;
// const users: User[] = [];

// function addUser(user: Omit<User, "id">): User {
//   const newUser: User = {
//     id: ++lastId,
//     ...user,
//   };

//   users.push(newUser);
//   return newUser;
// }

// addUser({ name: "Rayhan", email: "rayhan@gmail.com" });
// addUser({ name: "Borhan", email: "borhan@gmail.com" });
// console.log(users);

/* -------------------------------------------------------------------------- */

// - Optional Property (?)

type User = {
  id?: number;
  name: string;
  email: string;
};

const users: User[] = [];
let lastId: number = 0;

function addUser(user: User): User {
  const newUser = {
    id: ++lastId,
    ...user,
  };

  users.push(newUser);
  return newUser;
}

addUser({ name: "rayhan", email: "rayhan@gmail.com" });
addUser({ name: "borhan", email: "borhan@gmail.com" });
console.log(users);
