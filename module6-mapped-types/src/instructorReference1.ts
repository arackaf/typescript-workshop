// Mapped types

// Array.map

const a = [1, 2, "3"].map((val) => {
  // @ts-ignore
  return val + 1;
});

const b = [1, 2, "3"]
  .filter((val): val is number => typeof val === "number")
  .map((val) => {
    return val + 1;
  });

type Junk = {
  12: number;
  b: string;
};

type A = {
  [K in keyof Junk]: K extends string ? K : "number";
};

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

export default null;
