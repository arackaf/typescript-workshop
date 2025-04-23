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

type Junk = `Valid values are: ${Union}`;
const x: Junk = "Valid values are: 12";

// Actual Mapped types

type CorrectLifeChoices = {
  conference: "Commit Your Code";
  city: "Dallas";
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

// all fields with ID
type IdFields = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}` ? K : never]: Account[K];
};

// ok let's include Id__entification__
type IdFields2 = {
  [K in keyof Account as K extends `${string}${"id" | "Id"}${string}` ? K : never]: Account[K];
};

// let's strip just the name of the types of id's
type IdTypes = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}` ? U : never]: Account[K];
};

// clean it up and strip the empty id
type IdTypes2 = {
  [K in keyof Account as K extends `${infer U}${"id" | "Id"}` ? (U extends "" ? never : U) : never]: Account[K];
};

// ok I lied it's really this simple but I wanted to walk through some gross examples
type IdTypes3 = {
  [K in keyof Account as K extends `${infer U}${"Id"}` ? U : never]: Account[K];
};

type KeyProps = keyof IdTypes3;

export default null;
