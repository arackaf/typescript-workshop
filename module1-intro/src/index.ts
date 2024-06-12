class Foo {
  prop1?: string;
  prop2?: number;
}

type ArrayOf<T> = T extends Array<infer U> ? U : never;

const x: ArrayOf<Array<number>> = 12;

const f = new Foo();
f.prop1 = "Hello";
f.prop2 = x;

export { f };
