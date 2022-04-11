//Array.prototype.includes()
//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

let animal = ["dog", "cat", "chiken", "horse", "pig", 1, 2];
console.log(animal.includes("dog"));
console.log(animal.includes(3));

//String.prototype.matchAll()
//Метод matchAll() возвращает итератор по всем результатам при сопоставлении строки с регулярным выражением.

/*const regexp = /t(e)(st(\d?))/g;
const test = "test1test2";
const ar = [...test.matchAll(regexp)];
console.log(ar[0]);
console.log(ar[1]);*/

//Number.prototype.toString()
//Метод toString() возвращает строковое представление указанного объекта Number.

const chislo = 1000;
console.log(chislo.toString());
