function maxNum(arr) {
  let tops = [];
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let isTop = true;
    for (let j = i + 1; j <= arr.length; j++) {
      let onNum = arr[j];
      if (currNum <= onNum) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      tops.push(currNum);
    }
  }
  console.log(tops.join(" "));
}
maxNum([14, 24, 3, 19, 15, 17]);
