function equalSumsEvenOddPosition(input) {
  let currentNum = Number(input[0]);
  let endNum = Number(input[1]);
  let buff = " ";
  for (let i = currentNum; i <= endNum; i++) {
    let stringNum = String(i);

    let oddCounter = 0;
    let evenCounter = 0;
    for (let j = 0; j < stringNum.length; j++) {
      let currentChar = Number(stringNum[j]);
      let position = j + 1;
      if (position % 2 === 0) {
        evenCounter += currentChar;
      } else {
        oddCounter += currentChar;
      }
    }
    if (oddCounter === evenCounter) {
      buff += `${stringNum} `;
    }
  }
  console.log(buff);
}
equalSumsEvenOddPosition(["100000", "100050"]);
