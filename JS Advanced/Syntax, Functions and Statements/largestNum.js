function largestNum(a, b, c) {
  let currBigest = a;
  if (currBigest < b) {
    currBigest = b;
  }
  if (currBigest < c) {
    currBigest = c;
  }
  console.log(`The largest number is ${currBigest}.`);
}
largestNum(22, 2, 22.5);
