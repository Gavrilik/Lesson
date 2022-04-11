const arraysss = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;
function linearSearch(arraysss, item) {
  for (let i = 0; i < arraysss.length; i++) {
    count += 1;
    if (arraysss[i] === item) {
      return i;
    }
  }
  return null;
}
console.log(linearSearch(arraysss, 8));
console.log("count = ", count);
