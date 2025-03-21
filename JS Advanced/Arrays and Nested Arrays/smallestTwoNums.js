function smallestTwoNum(arr) {
  let rising = arr.sort((a, b) => a - b);
  console.log(`${rising[0]} ${rising[1]}`);
}
smallestTwoNum([3, 0, 10, 4, 7, 3]);
