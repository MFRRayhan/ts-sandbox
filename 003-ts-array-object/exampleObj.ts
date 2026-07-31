const user: {
  id: number;
  fullName: string;
} = {
  id: 102,
  fullName: "Sabid Islam",
};

type User = {
  id: number;
  fullName: string;
};

const user2: User = {
  id: 456,
  fullName: "Rishad Islam",
};

interface UserData {
  id: number;
  fullName: string;
}

const user3: UserData = {
  id: 124,
  fullName: "Ratul Islam",
};

console.log(user);
console.log(user2);
console.log(user3);
