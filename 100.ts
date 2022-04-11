class Calc {
  a: number;
  b: number;
  constructor() {
    this.a = 3;
    this.b = 3;
  }
  sum() {
    console.log(this.a + this.b);
  }
  div() {
    console.log(this.a / this.b);
  }
  sub() {
    console.log(this.a - this.b);
  }
  mul() {
    console.log(this.a * this.b);
  }
}
const qwe = new Calc();
qwe.sum();
qwe.div();
qwe.sub();
qwe.mul();
