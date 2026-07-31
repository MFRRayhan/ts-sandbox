let fullName: string;
fullName = "Golam Rabbani";
console.log(fullName.toUpperCase());

const newName = fullName.replace("Golam", "Fazle");
console.log(newName.toUpperCase());

let age: number;
age = 30;
// age = "thirty"; // type string is not assignable to type number
console.log(age);

let ticketStatus: boolean;
ticketStatus = true;
// ticketStatus = "true"; // type string is not assignable to type boolean
console.log(ticketStatus);
