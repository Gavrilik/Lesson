//Array.prototype.lastIndexOf()
let people = ["oleg", "dima", "sahsa", "zhan", "petia", "vova",1,-1,0,-1];
console.log(people.lastIndexOf("zhan"));
console.log(people.lastIndexOf("oleg"))
console.log(people.lastIndexOf("kirill"))
console.log(people.lastIndexOf(-1))
//возвращает последний индекс по которому элемент найден, или возвращает -1 если такого индекса нету.
var indices = [];//создаем пустой массив 
var array = ['a', 'b', 'a', 'c', 'a', 'd'];// масив со строками 
var element = 'a'; // в отдельную переменную строку которую хотим найти в массиве
var idx = array.lastIndexOf(element);// индексируем эту строку
while (idx != -1) {// если значение не равно -1 
  indices.push(idx);// пушим его в новый массив
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);//сравниваем условия со значениями
}
console.log(indices);


//String.prototype.replace()

//Number.prototype.valueOf()