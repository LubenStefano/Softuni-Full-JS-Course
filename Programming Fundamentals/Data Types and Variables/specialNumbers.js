function specialNum(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let special = "";
    for (let g = 0; g < String(i).length; g++) {
      let b = String(i)[g];
      sum += Number(b);
    }
    if (sum === 5 || sum === 7 || sum == 11) {
      special = "True";
    } else {
      special = "False";
    }
    console.log(`${i} -> ${special}`);
  }
}
specialNum(20);
