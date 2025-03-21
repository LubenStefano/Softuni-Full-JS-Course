function evenPositionElem(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i += 2) {
    even.push(arr[i]);
  }
  console.log(even.join(" "));
}
evenPositionElem(["5", "10"]);
