function reverseAnArrayOfNumbers(n, input) {
  let buff = [];
  for (let i = n; i > 0; i--) {
    let currentNum = input[i - 1];
    buff += currentNum + " ";
  }
  console.log(buff);

// let newArr = input.slice(0,n)
// console.log(newArr.join(" "));
}
reverseAnArrayOfNumbers(2, [-1, 20, 99, 5]);
