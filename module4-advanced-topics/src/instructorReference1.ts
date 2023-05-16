class Shape {
  name: string = "";
}

class Circle extends Shape {
  radius: number = 0;
}

let circle = new Circle();
let shape = new Shape();
//circle = new Shape();

let shape2: Shape = new Circle();

function draw(item: Shape) {
  console.log("I just drew", item.name);
}

draw(circle);

let drawShapeFunction: (item: Shape) => void = (_) => {};
let drawCircleFunction: (item: Circle) => void = (_) => {};

drawCircleFunction = drawShapeFunction;
//drawShapeFunction = drawCircleFunction;

let getCircle: () => Circle = () => new Circle();
let getShape: () => Shape = () => new Shape();

//getCircle = getShape;
getShape = getCircle;

// Conditional types

type IsArray<T> = T extends Array<unknown> ? true : false;

type A = IsArray<string[]>;
type B = IsArray<string>;

// Inferring types

type ArrayOfWhat<T extends Array<unknown>> = T extends Array<infer U> ? U : never;

type C = ArrayOfWhat<string[]>;
//type D = ArrayOfWhat<string>;
