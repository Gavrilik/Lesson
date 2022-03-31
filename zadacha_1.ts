import { ImportsNotUsedAsValues } from "typescript";

//Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
const mas = [2, 3, 4, 5, 32, 12, 1, 7, 9, 8, 6];
const initialValue = 0;
const sum = mas.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc += value;
  }
  return acc;
}, initialValue);
console.log("сума квадратных корней", Math.sqrt(sum));

const mass = [1, 2, 3, 4, 5];
const init = 0;
const minus = mass.reduce((acumulator, values) => {
  if (values % 2 === 1) {
    acumulator += values;
  }

  return acumulator;
}, init);
console.log("cумма нечетных елементов", minus);

const people = [
  { name: "oleg", age: 27, car: "honda" },
  { name: "dima", age: 26, car: "jaguar" },
  { name: "jhan", age: 27, car: "mazda" },
];
const sumAge = people.reduce((accum, valueAge) => {
  return accum + valueAge.age;
}, 0);
console.log("сумма всех возрастов ", sumAge);
