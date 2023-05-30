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

// ---------

type Account = {
  id: number;
  name: string;
  accountId: string;
  gamerId: string;
  myIdentification: string;
};

type IdFields = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}` ? K : never]: Account[K];
};

type IdFields2 = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}${string}` ? K : never]: Account[K];
};

type IdTypes = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}` ? U : never]: Account[K];
};

type IdTypes2 = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}` ? (U extends "" ? never : U) : never]: Account[K];
};

type IdTypes3 = {
  [K in keyof Account as K extends `${infer U}${"Id"}` ? U : never]: Account[K];
};

// -------

const paths = {
  users: "/users",
  userContacts: "/users/contacts",
  user: "/users/:id",
  settings: "/admin/settings",
  billing: "/admin/billing",
  account: "/admin/account",
} as const;

type Paths = typeof paths;

type AllPaths = {
  [K in keyof Paths]: Paths[K];
}[keyof Paths];

type PluckPathsFor_A<T, Path extends string> = T extends `/${Path}/${string}` ? T : never;

type AdminPaths_A = PluckPathsFor_A<AllPaths, "admin">;

type PluckPathsFor<T, Path extends string> = T extends `/${Path}/${infer U}` ? U : never;

type AdminPaths = PluckPathsFor<AllPaths, "admin">;

function doSomething(path: AdminPaths) {}

doSomething("billing");
doSomething("settings");
doSomething("settings");

export default null;
