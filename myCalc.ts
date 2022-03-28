class MyCalc {
  sum: (a: number, b: number) => number;
  mul: (a: number, b: number) => number;
  dif: (a: number, b: number) => number;
  sub: (a: number, b: number) => number;
  constructor() {
    this.sum = function (a: number, b: number) {
      return a + b;
    };
    this.mul = function (a: number, b: number) {
      return a * b;
    };
    this.dif = function (a: number, b: number) {
      return a / b;
    };
    this.sub = function (a: number, b: number) {
      return a - b;
    };
  }
}
const result = new MyCalc();
console.log(result.sum(3, 3));
console.log(result.mul(3, 3));
console.log(result.dif(3, 3));
console.log(result.sub(3, 3));
