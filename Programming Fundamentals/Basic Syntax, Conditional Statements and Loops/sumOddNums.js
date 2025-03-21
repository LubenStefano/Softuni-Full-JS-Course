function sumOddNums(nums) {
  let printed = 0;
  let sum = 0;
  let n = 0;
  while (printed < nums) {
    if (!(n % 2 === 0)) {
      console.log(n);
      sum += n;
      printed++;
    }
    n++;
  }
  console.log(`Sum: ${sum}`);
}
sumOddNums(10);
