/*	1.Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. 
    2. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками. 
    3. Дана строка 'я учу javascript!. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива. 
*/
//1
let lern = ["я", "учу", "javascript", "!"];
console.log(lern.join("+"));

//2 split
let test = "var_test_text";
let test1 =
  test.slice(0, 1) +
  test.slice(1, 2) +
  test.slice(2, 3) +
  test.slice(4, 5).toUpperCase() +
  test.slice(5, 6) +
  test.slice(6, 7) +
  test.slice(7, 8) +
  test.slice(9, 10).toUpperCase() +
  test.slice(10);
console.log(test1);

let test2 = "var_test_text";
let asdf = test2.split("_");

const mapToCamelCase = (str: string) => {
  return str
    .split("_")
    .map((word: string, index: number) => {
      if (index === 0) {
        return word;
      }
      const firstLetter = word[0].toUpperCase();
      word = word.substring(1);

      return firstLetter + word;
    })
    .join("");
};

console.log(mapToCamelCase("var_test_text"));

//3
let js = "я учу javascript";
console.log(js.split(""));
