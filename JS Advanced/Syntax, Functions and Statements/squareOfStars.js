function squareOfStars(num) {
  if (num === undefined) {
    num = 5;
  }
  let line = "";
  for (let i = 1; i <= num; i++) {
    line += "* ";
  }
  let square = "";
  for (let j = 1; j <= num; j++) {
    square += line + "\n";
  }
  console.log(square);
}
squareOfStars(3);
