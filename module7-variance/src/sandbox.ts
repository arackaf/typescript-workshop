/*

type Shape2 = {
  name: string;
};

type Circle2 = Shape2 & {
  radius: number;
}

*/

class Shape {
  name: string = "";
}

class Circle extends Shape {
  radius: number = 0;
}
