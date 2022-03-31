//Array.prototype.reduce()
//Метод reduce() применяет функцию reducer к каждому элементу массива
//(слева-направо), возвращая одно результирующее значение.
var total = [0, 1, 2, 3, 3, 4, 5, 6, 7].reduce(function (a, b) {
  return a + b;
});
console.log(total);

//String.prototype.replace()
//Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
//Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.

const kryg = /круглые/gi;
const strin = "Яблоки круглые и яблоки сочные.";
const asdwasdas = strin.replace(kryg, "апельсины");
console.log(asdwasdas);

//Number.prototype.toExponential()
//Метод toExponential() возвращает строку, представляющую объект Number в экспоненциальной записи.

const numObj = 123.123;
const numOne = 1;
console.log(numObj.toExponential(1));
console.log(numObj.toExponential());
console.log(numObj.toExponential(2));
console.log(numObj.toExponential());
console.log(numObj.toExponential(1));

