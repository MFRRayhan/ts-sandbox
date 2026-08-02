type Id = string | number;

const studentId: Id = "MFRR-1997";
console.log(studentId);

function printId(id: Id) {
  console.log(`ID: ${id}`);
}

printId("MFRR-1216");
printId("MGRB-1999");

/* -------------------------------------------------------------------------- */

type Rectangle = {
  height: number;
  width: number;
};

type Circle = {
  radius: number;
};

type Square = {
  length: number;
};

type Shape = Rectangle | Circle | Square;

function calculateArea(shape: Shape) {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else if ("length" in shape) {
    return shape.length * shape.length;
  }

  return shape.height * shape.width;
}

console.log(
  calculateArea({
    height: 30,
    width: 40,
  }),
);

console.log(calculateArea({ radius: 20 }));
console.log(calculateArea({ length: 20 }));
