function numPyramid(input) {
  let num = Number(input[0]);

  let current = 1;
  let isBigeer = false ;


  for (let rows = 1; rows <= num; rows++) {
    let buff = "";
    for (let cols = 1; cols <= rows; cols++) {
      buff += ` ${current}`;
      current++;

      if (current > num) {
        isBigeer = true;
        break;
      }
    }
    console.log(buff);
    if (isBigeer) {
      break;
    }
  }
}
numPyramid(["12"]);
