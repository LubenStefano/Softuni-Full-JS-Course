function commonElements(arr1, arr2) {
  for (const char of arr1) {
    if (arr2.includes(char)) {
      console.log(char);
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],

  ["s", "o", "c", "i", "a", "l"]
);
