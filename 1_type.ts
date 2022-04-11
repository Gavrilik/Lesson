//типы в ts
const isFetching: boolean = true;
const isLoadding: boolean = false;
const int: number = 32;
const float: number = 4.2;
const bigNum: number = 12e2;
const message: string = "hello";
const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray1: Array<number> = [1, 2, 3, 4, 5];
const words: string[] = ["hello"];

//Tuple

const contact: [string, number] = ["Oleg", 6205854];

//Any
//можно переопределять с типом any
let variable: any = 42;
variable = "new string";
variable = [];

//func
//void - означает что функция ничего не вернет
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("oleg");

//Never

function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

// Type
//создание своего типа
type Login = string;
const login: Login = "admin";
// при компиляции в js типы пропадают

type ID = string | number;
const id: ID = 123;
const id2: ID = "12123sad";

//null undefinde

type SomeType = string | null | undefined;
