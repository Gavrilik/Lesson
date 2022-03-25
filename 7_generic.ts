const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfString: Array<string> = ["hello", "oleg"];
function reverse<T>(array: T[]): T[] {
  //дженерик тип который будет подстраеватся под определеныый тип данных
  return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfString);
