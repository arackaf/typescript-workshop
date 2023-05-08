function filterUntyped(array: any[], test: (value: any) => boolean): any[] {
  const result: any[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

function filterNumbers(array: number[], test: (value: number) => boolean): number[] {
  const result: number[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

function filterString(array: string[], test: (value: string) => boolean): string[] {
  const result: string[] = [];

  for (const val of array) {
    if (test(val)) {
      result.push(val);
    }
  }

  return result;
}

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

const evenNumbers2 = filter(numbers, (x) => x % 2 === 0);
