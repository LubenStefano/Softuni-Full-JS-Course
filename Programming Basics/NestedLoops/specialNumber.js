function specialNumbers(input) {
  let digitNum = Number(input[0]);
  let printLine = "";

  for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {
    let numAsString = String(currentNumber);
    let result = true;

    for (let index = 0; index < numAsString.length; index++) {
      let currentDigit = Number(numAsString[index]);

      if (currentDigit === 0 || digitNum % currentDigit !== 0) {
        result = false;
        break;
      }
    }

    if (result) {
      printLine += `${numAsString} `;
    }
  }
  console.log(printLine);
}

specialNumbers(["16"]);
