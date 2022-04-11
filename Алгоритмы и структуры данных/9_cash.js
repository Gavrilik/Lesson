//кеширование

function cashFunc(fn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("взято из кеша", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    console.log("посчитали из функции = ", result);
    cash[n] = result;
    return result;
  };
}

function factorial(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }
  return result;
}

const cashFactorial = cashFunc(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);
cashFactorial(4);
cashFactorial(10);
cashFactorial(10);