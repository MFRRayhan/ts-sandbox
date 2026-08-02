type Colors = "red" | "green" | "blue";
// const teeShirt: Colors = "purple"; //type 'purple' isn't assignable to type Colors
const teeShirt = "red";
console.log(teeShirt);

/* -------------------------------------------------------------------------- */

type Methods = "GET" | "POST" | "DELETE";
// const method: Methods = "PUT"; // Type '"PUT"' is not assignable to type 'Methods'.
const method: Methods = "GET";
console.log(method);
