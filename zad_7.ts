/*  1.Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
    2.  Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
    То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
    Если число не делится - выведите 'false', а если делится - выведите 'true'.
    3.  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.*/

//1
let mass5 = [1, 2, 3, 4, 5];
let flag = false;
for (let i = 0; i < mass5.length; i++) {
  if (mass5[i] == 5) {
    flag = true;
    break;
  }
}
if (flag == true) {
  console.log("да");
} else {
  console.log("нет");
}

//2

let num1231 = 31;
let flag1 = false;
for (let i = 2; i < num1231; i++) {
  if (num1231 % i == 0) {
    flag1 = true;
    break;
  }
}
if (flag1 == true) {
  console.log("да");
} else {
  console.log("нет");
}

//3
let massSame = [1, 1, 2, 3];
for (let i = 1; i < massSame.length; i++) {
  if (massSame[i] === massSame[i - 1]) {
    console.log("да");
  } else {
    console.log("нет");
  }
}

//метод some
const someEl = (arr: number[]) =>
  arr.some((el, i, arr) => i != 0 && el === arr[i - 1]);

console.log(someEl([5, 5, 2]));
console.log(someEl([5, 1, 5, 2, 2, 7]));
