// s is a string
let s = "Hello";

// error
//s = 12;

let s2: string;
// error
//s2 = 12;

// types
let b: boolean;
let n: number;

let u: unknown;
let a: any;

function getNumber(): number {
  return 12;
}

const getNumber2 = (): number => {
  return 12;
};

function plus1(val: number): number {
  return val + 1;
}

const plus2 = (val: number): number => {
  return val + 1;
};

function logAll(...values: string[]) {
  console.log(...values);
}

logAll("a", "b", "c");

function logAll2(...values: (string | number)[]) {
  console.log(...values);
}

logAll2(1, "2", 3, "4", 5, "6");

type TwoStringsReturnNumber = (s1: string, s2: string) => number;

const fn: TwoStringsReturnNumber = (s1, s2) => {
  return s1.length + s2.length;
};

type BoolForSomeReason = boolean;

// types can be combined

type BoolOrString = boolean | string;
// union - we'll just pretend it means or ... more on this later

let bool: BoolForSomeReason = true;

type SomeObject = {
  name: string;
  age: number;
  active: boolean;
};
// grab a slice of a type

// type SomeObjectName = SomeObject.name;
// type SomeObjectName = SomeObject::name;
type SomeObjectName = SomeObject["name"];

type KeyOfSomeObject = keyof SomeObject;
let x: KeyOfSomeObject;

// now let's peak ahead - generics come later, but let's see something neat ...

type TypeOfSomeObjectProperty<T extends keyof SomeObject> = SomeObject[T];
type Name = TypeOfSomeObjectProperty<"name">;

// Tuples
type StringNumberTuple = [string, number];

let tuple: StringNumberTuple = ["", 2];

let tupleStr = tuple[0];
