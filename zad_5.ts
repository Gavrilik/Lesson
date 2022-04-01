/*	1.  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. 
    2.	Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. 
    3.  Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. 
    4.  Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
    5.  Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
    6.  Сделайте функцию, которая возвращает сумму двух чисел.
    7.  Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
    8.  Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

*/

//1

let masiv = [3, 4, 1, 2, 7];
console.log(masiv.sort());

//2
let obj = { js: "test", jq: "hello", css: "world" };
console.log(Object.keys(obj));

//3
let stroka = "oleg";
console.log(stroka[0].toUpperCase() + stroka.substring(1));

//4
function revers(str: string) {
  let splitStr = str.split("").reverse().join();
  console.log(splitStr);
}
revers("123456");

//5
function sqr(x: number) {
  console.log(`степень числа ${x * x}`);
}

sqr(12);

//6
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(1, 2));

//7
function dife(q: number, w: number, e: number) {
  return (q - w) / e;
}
console.log(dife(2, 1, 1));

//8
function denNed(z: number) {
  if (z == 1) {
    console.log("понелеьник");
  } else if (z == 2) {
    console.log("вторник");
  } else if (z == 3) {
    console.log("среда");
  } else if (z == 4) {
    console.log("четверг");
  } else if (z == 5) {
    console.log("пятница");
  } else if (z == 6) {
    console.log("суббота");
  } else if (z == 7) {
    console.log("воскресенье");
  } else {
    console.log("нет такого дня недели ");
  }
}
denNed(4);

/*function denNedPromise(z: number) {
  const promise = new Promise((resolve, reject) => {
    resolve();
  });
}*/