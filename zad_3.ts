/*1. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. 
 проверьте есть ли в массиве элемент со значением, равным 11. Если нет - выведите на экран нету!' 
 и выйдите из цикла. Если нет - ничего делать не надо. 
2. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
Текущий день должен храниться в переменной day.
3.	Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num. 
*/

//1
const mass4 = [1, 2, 5, 9, 13, 4, 10];
const check = (element: number) => element == 11;
if (mass4.some(check)) {
} else {
  console.log("нету");
}

const mass5 = [1, 2, 5, 9, 13, 4, 10];
const cek = (element: number) => element == 11;
if (mass5.find(cek)) {
} else {
  console.log("нет");
}
//правильный метод
const mass6 = [1, 2, 5, 9, 13, 4, 10];
if (mass5.includes(11)) {
} else {
  console.log("нет");
}

//2
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = 5;
for (let i = 0; i <= week.length; i++) {
  if (i == day) {
    console.log(week[i].toUpperCase());
  }
}

//3
let x = 1000;
let dif = 0;
while (x > 50) {
  x /= 2;
  dif++;
}

console.log(x);
console.log(dif);