function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  let result = evenSum - oddSum;
  console.log(result);
}
evenAndOddSubtraction([3, 5, 7, 9]);
