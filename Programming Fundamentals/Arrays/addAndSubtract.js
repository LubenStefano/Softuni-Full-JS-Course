function addAndSubtract(arr) {
  let newArr = [];
  let oldSum = 0;
  let newSum = 0;

  for (let i = 0; i < arr.length; i++) {
    oldSum += arr[i];

    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    newArr.push(arr[i]);
    newSum += arr[i];
  }
  console.log(newArr);
  console.log(oldSum);
  console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
