function palindromeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currNum = String(arr[i]);
    let currNumArr = [];
    let currNumArrRev = [];
    for (let j = 0; j < currNum.length; j++) {
      currNumArr.push(currNum[j]);
      currNumArrRev.unshift(currNum[j]);
    }
    if (currNumArr.join("") === currNumArrRev.join("")) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindromeIntegers([32, 2, 232, 1010]);
