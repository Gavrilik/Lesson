/*1. Сделайте функцию, которая параметрами принимает 2 числа. 
Если эти числа равны - пусть функция вернет true, а если не равны - false.
2. Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
3. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
Если отрицательное - пусть функция вернет true, а если нет - false.*/

//1

function takeTw(a = 3, b = 3) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(takeTw());

//2

function sumChisla(a = 2, b = 3) {
  if (a + b > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(sumChisla());

//3
function minC(a = 1){
    if (a < 0){
        return true;
    }else{
     return false;
    }
};
console.log(minC());
