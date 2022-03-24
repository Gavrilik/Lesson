//Array.prototype.reduceRight()
//Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.
const summ = [0, 1, 2, 3, 12].reduceRight(function (a: number, b: number): any {
  return a + b;
});
console.log(summ);

const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight(function (a, b) {
  //вернули значение всех эл. массива с пправа на лево.
  return a.concat(b); //объединенили все  массивы в 1
}, []);
console.log();

//String.prototype.concat()
//Метод concat() объединяет текст из двух или более строк и возвращает новую строку.

const hello = "Привет";
console.log(hello.concat(" Олег", " как дела?"));

let as = "privet";
console.log((as += " oleg")); // можно использовать += или + вместо concat

//Number.isFinite()
//Метод  определяет, является ли переданное значение конечным числом.

console.log(isFinite(12));
