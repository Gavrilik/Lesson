/*1.Дан массив с числами. 
Выведите последовательно его элементы используя рекурсию и не используя цикл. 

2.Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
И так, пока сумма не станет однозначным числом (9 и менее). */

//1
let massNum = [34, 56, 12, 3, 7, 96, 36];
function reck(i: number[]) {
  console.log(i[0]);
  i.splice(0, 1);
  if (i.length > 0) {
    reck(i);
  }
}
console.log(reck(massNum));

//2

function sumrec(n: number) {
  let sum = String(n)
    .split("") //делаем из числа масив строк
    .reduce((acc, value) => (acc += +value), 0); //слаживам и присваеваем аккумулятору число
  console.log(sum); //сумма сложени 2 цифр числа
  if (sum > 9) sum = sumrec(sum); // если больше 9 повторяем операцию сложения
  return sum;
}
sumrec(88);
