const arrayNum = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let counts = 0;
function linearSearchs(arrayNum: number[], item: number) {
  for (let i = 0; i < arrayNum.length; i++) {
    counts += 1;
    if (arrayNum[i] === item) {
      return i;
    }
  }
  return null;
}
console.log(linearSearchs(arrayNum, 8));
console.log("count = ", counts);
