function divisions(num) {
  let divNum = 0;
  let isDevis = true;
  if (num % 10 === 0) {
    divNum = 10;
  } else if (num % 7 === 0) {
    divNum = 7;
  } else if (num % 6 === 0) {
    divNum = 6;
  } else if (num % 3 === 0) {
    divNum = 3;
  } else if (num % 2 === 0) {
    divNum = 2;
  } else {
    isDevis = false;
  }
  if (!isDevis) {
    console.log("Not divisible");
  } else {
    console.log(`The number is divisible by ${divNum}`);
  }
}
divisions(1643);
