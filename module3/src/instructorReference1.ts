type Cat = {
  name: string;
  whiskers: number;
  catBreed: string;

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
