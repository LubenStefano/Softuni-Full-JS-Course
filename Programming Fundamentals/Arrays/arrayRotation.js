function arrayRotation(arr, rotation) {
  for (let index = 1; index <= rotation; index++) {
    let char = arr.shift();
    arr.push(char);
  }
  console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
