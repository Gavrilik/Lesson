//Array.prototype.lastIndexOf()
const people = ["oleg", "dima", "sahsa", "zhan", "petia", "vova", 1, -1, 0, -1];
console.log(people.lastIndexOf("zhan"));
console.log(people.lastIndexOf("oleg"));
console.log(people.lastIndexOf("kirill"));
console.log(people.lastIndexOf(-1));
//возвращает последний индекс по которому элемент найден, или возвращает -1 если такого индекса нету.
const indices = []; //создаем пустой массив
const array = ["a", "b", "a", "c", "a", "d"]; // масив со строками
const element = "a"; // в отдельную переменную строку которую хотим найти в массиве
let idx = array.lastIndexOf(element); // индексируем эту строку
while (idx != -1) {
  // если значение не равно -1
  indices.push(idx); // пушим его в новый массив
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1; //сравниваем условия со значениями
}
console.log(indices);

//String.prototype.replace()
//возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
//Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.
function replacer(
  match: string,
  p1: string,
  p2: string,
  p3: string,
  p4: string,
  offset: string,
  string: string
): string {
  // p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры, p4 - цифры
  return [p1, p2, p3, p4].join(" - "); // возвращает все элементы массива  разделенные  -
}
const newString = "abcsadasdasdasd12312312312345#&&&$*%12312312312".replace(
  /([^\d]*)(\d*)([^\w]*)([^\d]*)/,
  replacer
); //разделяет строку на буквы числа и элементы
console.log(newString);

const re = /яблоки/gi; // слово которое хотим заменить /.../ , g - глобальное сопоставление, i - игнорировать региср
const res = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
const str = "Яблоки круглые и яблоки сочные.";
const str1 = "Олег Гаврилик";
const newstr = str.replace(re, "апельсины"); //замена в строке str яблоки на апельсины.
const newstr1 = str1.replace(res, "$2 $1"); // меняет местами слова в строке.
console.log(newstr);
console.log(newstr1);

//Number.prototype.valueOf()
//Метод valueOf() возвращает примитивное значение объекта Number.

const asd = new Object("1"); //создание объекта
console.log(typeof asd); // тип asd - объект
const num = asd.valueOf(); // возвращает примитивное значение объекта
console.log(num); // 1
console.log(typeof num); // тип будет строка
