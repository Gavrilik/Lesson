/*1.В переменной day лежит какое-то число из интервала от 1 до 31. 
    Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
  2.В переменной month лежит какое-то число из интервала от 1 до 12. 
    Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
  3.Дана строка с цифрами, например, '12345'. 
    Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'. 
  4. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
    Если это так - выведите 'да', в противном случае выведите 'нет'.   
    */

//1
let day1 = 31;
if (day1 >= 1 && day1 <= 10) {
  console.log("в первую декаду");
}
if (day1 > 10 && day1 <= 20) {
  console.log("во 2 декаду");
}
if (day1 > 20 && day1 <= 31) {
  console.log("в третью");
}
if (day1 > 31) {
  console.log("нет такого дня месяца");
}

//2
let month = 9;
if (month == 12 || (month >= 1 && month <= 2)) {
  console.log("зима");
}
if (month >= 3 && month <= 5) {
  console.log("весна");
}
if (month >= 6 && month <= 8) {
  console.log("лето");
}
if (month >= 9 && month <= 11) {
  console.log("осень");
}

//3
let stroka1 = "12345";
if (stroka1[0] == "1" || stroka1[0] == "2" || stroka1[0] == "3") {
  console.log("да");
} else {
  console.log("нет");
}

//4

let sumChisel = "123456";
if (
  +sumChisel[0] + +sumChisel[1] + +sumChisel[2] ==
  +sumChisel[3] + +sumChisel[4] + +sumChisel[5]
) {
  console.log("да");
} else {
  console.log("нет");
}

function checkSums(str: string) {
  const arr = Array.from(str).map((n) => +n); // c .from (из строки сделали массив строк) .map(преобразовали строки числа )
  const centerIndex = Math.floor(arr.length / 2) - 1; //раздилили длиинну массива на 2 и отняли 1(нашли центр массива)интекс начинается с 0
  const { leftSide, rightSide } = arr.reduce(
    // у правой и левой стороны массива вызывае метод .reduce
    (acc, value, index) => {
      if (index <= centerIndex) {
        acc.leftSide += value; //присваивание значению левой стороны
      } else {
        acc.rightSide += value; //присваивание значению правой стороны
      }
      return acc;
    },
    { leftSide: 0, rightSide: 0 } //результат сложение левой и правой стороны
  );

  if (leftSide === rightSide) {
    //сравнение сторон (если равны true если нет false)
    console.log("yes");
  } else {
    console.log("no");
  }
}

const strCisel = "123456";
checkSums(strCisel); // true

const strCisel2 = "654321";
checkSums(strCisel2); // false

let str12 = "654321";
console.log(
  str12.split("").reduce((p, c, i) => p + (i < 3 ? +c : -c), 0) ? "нет" : "да"
); //.split(преобразовывет стрроку в массив используя указанный символ)
//.reduce(сравниваем, )
