function sumEvenNumbers(arr) {
  let sum = 0;
  for (const num of arr) {
    if (Number(num) % 2 === 0) {
      sum += Number(num);
    }
  }
  console.log(sum);
}
sumEvenNumbers(["2", "4", "6", "8", "10"]);
