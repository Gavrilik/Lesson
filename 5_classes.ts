class Typescript {
  //класс
  version: string;

  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWhels: number = 4;
  constructor(theModel: string) {
    this.model = theModel; // model можем перезаписывать только в конструкторе
  }
}

class Cars {
  //идентична верхней  записи car
  readonly numberOfWhels: number = 4;
  constructor(readonly model: string) {}
}

//=========================
class Animal {
  protected voice: string = ""; // модификаторы,если не указывать по умолчанию будет public
  public color: string = "black";
  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}
const cat = new Cat();
cat.setVoice("meow");
console.log(cat.color);

//==========================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component render");
  }
  info(): string {
    return "This is info";
  }
}
