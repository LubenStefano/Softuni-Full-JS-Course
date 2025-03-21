function addAndSubtract(a, b, c) {
  function sum(num1, num2) {
    let result = num1 + num2;
    return result;
  }
  function subtract(num1, num2) {
    let result = num1 - num2;
    console.log(result);
  }
  subtract(sum(a, b), c);
}
addAndSubtract(
  1,

  17,

  30
);
