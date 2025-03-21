function distinctArray(arr) {
  let newArr = [];
  for (const num of arr) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  console.log(newArr.join(" "));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
