function sumFirstAndLast(arr) {
  function sum() {
    let a = Number(arr[0]);
    let b = Number(arr[arr.length - 1]);
    return a + b;
  }
  console.log(sum(arr));
}
sumFirstAndLast([20, 5]); // 60
