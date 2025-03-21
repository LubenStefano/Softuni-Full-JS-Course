function negativeOrPositiveNum(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  for (let num of newArr) {
    console.log(num);
  }
}
// negativeOrPositiveNum([7, -2, 8, 9]); // -2, 8, 9, 7
negativeOrPositiveNum([3, -2, 0, -1]); // -1, -2, 3, 0
