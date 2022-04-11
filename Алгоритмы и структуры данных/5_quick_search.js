// быстрая сортировка
// разделяй и властвуй, делим массив на под массивы
//берем опорный элементы если больше в 1 массив если меньше в другой массив
// и так до тех пор пока длинна масиива не станет 1
const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    //остановка рекурсии
    return array;
  }
  let centrIndex = Math.floor(array.length / 2); //центр массива
  let centr = array[centrIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === centrIndex) continue;
    if (array[i] < centr) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), centr, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(count);
