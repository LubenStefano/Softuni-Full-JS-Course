function perfectNum(num) {
  let sum = 0;
  let isPerfect = false;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
      if (sum === num) {
        isPerfect = true;
        console.log("We have a perfect number!");
        break;
      }
    }
  }
  if (!isPerfect) {
    console.log("It's not so perfect.");
  }
}
perfectNum(496);
