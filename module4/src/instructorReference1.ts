class Shape {
  name: string = "";
}

class Circle extends Shape {
  radius: number = 0;
}

let circle = new Circle();
let shape = new Shape();

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

type X = (a: string, b: number, c: number) => void;
type p = Parameters<X>[0];
