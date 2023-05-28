type Cat = {
  name: string;
  whiskers: number;
  catBreed: string;

  // casing does not matter - I just wanted it to stand out - could name it anything
  TYPE: "CAT";
};

type Dog = {
  name: string;
  obedient: boolean;
  dogBreed: string;

  TYPE: "DOG";
};

export function dealWithCatOrDog(animal: Cat | Dog) {
  if ("whiskers" in animal) {
    console.log("Cat", animal.name, animal.catBreed, animal.whiskers);
  } else {
    console.log("Dog", animal.name, animal.dogBreed, animal.obedient);
  }
}

export function dealWithCatOrDog2(animal: Cat | Dog) {
  if (animal.TYPE === "CAT") {
    console.log("Cat", animal.name, animal.catBreed, animal.whiskers);
  } else {
    console.log("Dog", animal.name, animal.dogBreed, animal.obedient);
  }
}

type StringOrNumber = string | number;

let sOrN: StringOrNumber = Math.random() < 0.5 ? 12 : "Hello";

if (typeof sOrN === "string") {
  console.log(sOrN.toLowerCase());
} else {
  console.log(sOrN.toFixed(2));
}

class A {
  a: string = "A";
}

class B {
  b: string = "B";
}

type AorB = A | B;
let aOrB: AorB = Math.random() < 0.5 ? new A() : new B();

if (aOrB instanceof A) {
  console.log(aOrB.a);
} else {
  console.log(aOrB.b);
}
