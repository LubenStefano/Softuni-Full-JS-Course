function factorialDivision(num1, num2) {
  function firstAction(a) {
    let result = 1;
    for (let i = a; i > 0; i--) {
      result *= i;
    }
    return result;
  }
  function secondAction(b) {
    let result = 1;
    for (let i = b; i > 0; i--) {
      result *= i;
    }
    return result;
  }
  let division = firstAction(num1) / secondAction(num2);
  console.log(division.toFixed(2));
}
factorialDivision(6, 2);
