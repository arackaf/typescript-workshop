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

let circle = new Circle();
let shape = new Shape();

// error
//circle = new Shape();

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

// Conditional types

type Useless = Array<number> extends object ? true : false;

type IsArray<T> = T extends Array<unknown> ? true : false;

type A = IsArray<string[]>;
type B = IsArray<string>;

// Inferring types

type ArrayOfWhat1<T> = T extends Array<infer U> ? U : never;

type ArrayOfWhat2<T extends Array<unknown>> = T extends Array<infer U> ? U : never;

type C = ArrayOfWhat1<string[]>;
type D = ArrayOfWhat1<string>;

type CC = ArrayOfWhat2<string[]>;

// Mapped types

type CorrectLifeChoices = {
  conference: "RenderATL";
  city: "Atlanta";
  language: "TypeScript";
};

type Keys = keyof CorrectLifeChoices;

type CorrectLifeChoicesCopy = {
  [K in keyof CorrectLifeChoices]: CorrectLifeChoices[K];
};

type CorrectLifeChoices_Getters = {
  [K in keyof CorrectLifeChoices]: () => CorrectLifeChoices[K];
};

type CorrectLifeChoices_Getters_BetterNames = {
  [K in keyof CorrectLifeChoices as `get${K}`]: () => CorrectLifeChoices[K];
};

type CorrectLifeChoices_Getters_BetterNamesStill = {
  [K in keyof CorrectLifeChoices as `get${Capitalize<K>}`]: () => CorrectLifeChoices[K];
};

type ThingsThatMatterInLife = {
  [K in keyof CorrectLifeChoices]: CorrectLifeChoices[K];
}[keyof CorrectLifeChoices];

export default null;
