// s is a string
let s = "Hello";

// error
//s = 12;

let s2: string;

// error
//s2 = 12;

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

// TODO: any, unknown, never
