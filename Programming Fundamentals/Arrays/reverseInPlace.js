function reverseInPlace(arr) {
  let newArr = [];
  for (const char of arr) {
    newArr.unshift(char);
  }
  console.log(newArr.join(" "));
}
reverseInPlace(["33", "123", "0", "dd"]);
