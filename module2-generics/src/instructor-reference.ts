// this will filter anything ...
function filterUntyped(array: any[], test: (value: any) => boolean): any[] {
  const result: any[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// filter numbers
function filterNumbers(array: number[], test: (value: number) => boolean): number[] {
  const result: number[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// ... and now strings
function filterString(array: string[], test: (value: string) => boolean): string[] {
  const result: string[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// filter with actual types
function filter<T>(array: T[], test: (value: T) => boolean): T[] {
  const result: T[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

// Calling the generic function

const numbers = [1, 2, 3, 4];

const evenNumbers = filter<number>(numbers, (x) => x % 2 === 0);

// error
//const x = filter<string>(numbers, x => x % 2 === 0);

// infer the generic type
const evenNumbers2 = filter(numbers, (x) => x % 2 === 0);

// classes can be generic, too!

class Foo<T1, T2> {
  property1?: T1;
  property2?: T2;

  constructor(p1: T1, p2: T2) {
    this.property1 = p1;
    this.property2 = p2;
  }
}

let fooInst1 = new Foo<number, string>(12, "Hello");

//let fooInstWrong = new Foo<boolean, string>(12, "Hello");

let fooInst2 = new Foo(12, "Hello");

export default null;
