function nXnMatrix(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    row += n + " ";
  }
  for (let j = 0; j < n; j++) {
    console.log(row);
  }
}
nXnMatrix(3);
