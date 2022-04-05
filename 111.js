const str12 = "Произвольный текст, содержащий цифры вроде 1, 2, 45 или 36";
console.log(str12.match(/\-?\d+/g).reduce((sum, el) => sum + +el, 0));

let sumC = ["a", "b", "c", "d"];
function hasElement() {
  for (i = 0; i < sumC.length; i++) {
    if (sumC[i] == "c") {
      return true;
    }
  }
  return false;
}
console.log(hasElement(sumC));
