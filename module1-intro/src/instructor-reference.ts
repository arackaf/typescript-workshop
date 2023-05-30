// s is a string
let s = "Hello";

// error
// s = 12;

let s2: string;
// error
//s2 = 12;

// types
let b: boolean;
let n: number;

// No type checking at all
let a: any;

// all types assignable to unknown, as well, BUT you can't really use it. Only check for equality, or use things like instanceof
let u: unknown;

// never represents a type that will never exist / never have any value
let nev: never;

// typing functions

// void is for functions that return nothing. You don't need it here but you would for function types ... stay tuned
function foo(): void {}

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

type BoolForSomeReason = boolean;

type TwoStringsReturnNumber = (s1: string, s2: string) => number;
type LogTwoStrings = (s1: string, s2: string) => void;

const fn: TwoStringsReturnNumber = (s1, s2) => {
  return s1.length + s2.length;
};

const fn2: LogTwoStrings = (s1, s2) => {
  console.log(s1, s2);
};

// declaring types

// types can be combined

type BoolOrString = boolean | string;
// union - we'll just pretend it means or ... more on this later

let bool: BoolForSomeReason = true;

// types can hold literal valies
type Yes = "YES";

// this is the type with "YES" only. It's NOT a string. We'll see this when we discuss discriminated unions in a bit

let yes: Yes = "YES";
// error
// yes = "No";

// remember we said types can be combined?

type YesOrNo = "YES" | "NO";
let yesOrNo: YesOrNo = "NO";
yesOrNo = "YES";

// object types

type SomeObject = {
  name: string;
  age: number;
  active: boolean;
};

let obj: SomeObject = {
  name: "Kevin",
  age: 20,
  active: true,
};

let defaultState = {
  title: "",
  active: true,
  count: 0,
};

type DefaultState = typeof defaultState;

// grab a slice of a type

// type DefaultStateTitle = DefaultState.name;
// type DefaultStateTitle = DefaultState::name;

type DefaultStateTitle = DefaultState["title"];

type KeyOfDefaultState = keyof DefaultState;
let x: KeyOfDefaultState;

// now let's peak ahead - generics come later, but let's see something neat ...

type TypeOfDefaultStateProperty<T extends keyof DefaultState> = DefaultState[T];
type Name = TypeOfDefaultStateProperty<"title">;

// Tuples
type StringNumberTuple = [string, number];

let tuple: StringNumberTuple = ["", 2];

let tupleStr = tuple[0];

export default null;
