function amazingNumbers(num) {
  let isAmazing = false;
  let sum = 0;
  for (let i = 0; i < String(num).length; i++) { 
    let sDigit = String(num)[i];
    sum += Number(sDigit);
  }
  sum;
  for (let i = 0; i < String(sum).length; i++) {
    let digit = String(sum)[i];
    if (Number(digit) === 9) {
      isAmazing = true;
    } else {
      continue;
    }
  }
  if (isAmazing === true) {
    console.log(`${num} Amazing? True`);
  } else {
    console.log(`${num} Amazing? False`); 
  }
}
amazingNumbers(1233);
