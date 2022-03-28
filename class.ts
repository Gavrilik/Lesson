class Person {
  static type = "PERSON";
  name: string;
  age: number;
  surname: string;
  constructor(options: any) {
    (this.name = options.name),
      (this.age = options.age),
      (this.surname = options.surname);
  }
  voice() {
    console.log(`my name ${this.name}`);
  }
}
/*const person = new Person({
  name: "ivan",
  age: 12,
  surname: "petrov",
});*/

class Chelovek extends Person {}
const chelovek = new Chelovek({
  name: "oleg",
  age: 1,
  surname: "asd",
});
