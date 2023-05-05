const add = (x, y) => {
  return x + y;
};

function subtract(x, y) {
  return x - y;
}

interface Point {
  x: number;
  y: number;
}

// make this function return Point
function getOrigin() {
  return {
    x: 0,
    y: 0,
  };
}

interface Point3d {
  x: number;
  y: number;
  z: number;
}

// make this function return Point3d
function getOrigin3d() {
  return {
    x: 0,
    y: 0,
    z: 0,
  };
}

function arrayMax(arr) {
  let max = Number.MIN_VALUE;

  for (const x of arr) {
    if (x > max) {
      max = x;
    }
  }

  return max;
}

// change never to the correct type
let firstBigger: never;

firstBigger = (x, y) => {
  return x > y;
};
