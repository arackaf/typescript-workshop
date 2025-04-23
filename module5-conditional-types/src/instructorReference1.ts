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

export default null;
