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

// Prelude

type Union = "A" | "B" | 12 | 42 | "C";
type OnlyStrings<T> = T extends string ? T : never;

type StringsInUnion = OnlyStrings<Union>;

// Actual Mapped types

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

// ---------------------------------------------------------------------------

type ThingsThatMatterInLife_Object = {
  [K in keyof CorrectLifeChoices]: CorrectLifeChoices[K];
};

type Keys = keyof ThingsThatMatterInLife_Object;
// type Keys = 'conference' | 'city' | 'language';

//type Values = ThingsThatMatterInLife_Object["conference" | 'city' | 'language']

type Values = ThingsThatMatterInLife_Object[Keys];

// ------

type ThingsThatMatterInLife = {
  [K in keyof CorrectLifeChoices]: CorrectLifeChoices[K];
}[keyof CorrectLifeChoices];

// ---------------------------------------------------------------------------

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
