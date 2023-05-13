type Cat = {
  name: string;
  whiskers: number;
};

type Dog = {
  name: string;
  obedient: boolean;
};

let catOrDog: Cat | Dog;

let catAndDog: Cat & Dog;

function dealWithCatOrDog(animal: Cat | Dog) {}

export default null;
