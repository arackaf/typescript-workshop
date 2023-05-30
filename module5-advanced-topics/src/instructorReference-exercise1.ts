type GetReturnType1<T> = T extends (...args: any) => infer U ? U : never;

type GetReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer U ? U : never;

type X = (a: number, b: string) => string[];

type Str = GetReturnType<X>;
//type Junk = GetReturnType<string>;

type GetParameters1<T> = T extends (...args: infer U) => any ? U : never;

type GetParameters<T extends (...args: any) => any> = T extends (...args: infer U) => any ? U : never;

type StringAndNumber = (s: string, n: number) => string[];

type Args = GetParameters<StringAndNumber>;
//type Args2 = GetParameters<string>;

type GetParameter<T extends (...args: any) => any, N extends number> = T extends (...args: infer U) => any ? U[N] : never;

type StringAndNumberParams = (s: string, n: number) => string[];

type StringIHope = GetParameter<StringAndNumberParams, 0>;
type NumberIHope = GetParameter<StringAndNumberParams, 1>;
type Hmmm = GetParameter<StringAndNumberParams, 2>;

///

type UsingReal1 = Parameters<StringAndNumberParams>;

type UsingReal2 = ReturnType<StringAndNumberParams>;

///

const actualFunction = (a: number, b: number[], c: string[][]) => {
  return 12;
};

type StringArrArr = GetParameter<typeof actualFunction, 2>;
