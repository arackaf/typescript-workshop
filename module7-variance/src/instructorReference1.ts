type Shape2 = {
  name: string;
};

type Circle2 = Shape2 & {
  radius: number;
};

class Shape {
  name: string = "";
}

class Circle extends Shape {
  radius: number = 0;
}

let circle: Circle = new Circle();
let shape: Shape = new Shape();

// error
//circle = new Shape();

shape = new Circle();

let shape2: Shape = new Circle();

function draw(item: Shape) {
  console.log("I just drew", item.name);
}

draw(circle);

type DrawShapeFn = (item: Shape) => void;
type DrawCircleFn = (item: Circle) => void;

let drawShapeFunction: DrawShapeFn = (_: Shape) => {};
let drawCircleFunction: DrawCircleFn = (_: Circle) => {};

drawCircleFunction = drawShapeFunction;
//drawShapeFunction = drawCircleFunction;

let getCircle: () => Circle = () => new Circle();
let getShape: () => Shape = () => new Shape();

//getCircle = getShape;
getShape = getCircle;

export default null;
