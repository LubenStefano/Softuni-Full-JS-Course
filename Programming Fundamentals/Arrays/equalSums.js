function equalSums(arr) {
  let leftSum = 0;
  let totalSum = 0;
  isNot = true;
  for (let num of arr) {
    totalSum += num;
  }
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    if (leftSum === totalSum) {
      console.log(i);
      isNot = false;
      break;
    }
    totalSum -= arr[i];
  }
  if (isNot) {
    console.log("no");
  }
}
equalSums([
  10, 5, 5, 99,

  3, 4, 2, 5, 1,

  1, 4,
]);
