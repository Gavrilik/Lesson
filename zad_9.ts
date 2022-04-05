/*1.    Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
 Если это так - пусть функция возвращает true, если не так - false.
 2. 	Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
 Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.  
 3.  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
 Если четное - пусть функция возвращает true, если нечетное - false.  */

//1
function isNumberInRange(a = 4) {
  if (a > 0 && a < 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isNumberInRange());

//2

let arrayOfNum = [1, 2, 3, 4, 5, 6, 12, -3, 123];

function arrNum(arr: number) {
  if (arr > 0 && arr < 10) {
    // условие
    return true;
  } else {
    return false;
  }
}
let newAr: number[] = []; //создание пустого массива
for (let i = 0; i <= arrayOfNum.length; i++) {
  if (arrNum(arrayOfNum[i])) {
    newAr.push(arrayOfNum[i]); // запись в пустой массив
  }
}
console.log(newAr);

//3
function isEven(a: number) {
  if (Number.isInteger(a / 2)) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(22321) ? "четное" : "нечетное");
