function ArrayWithGivenDelimiter(arr, char) {
  let result = arr.join(char);
  console.log(result);
}
ArrayWithGivenDelimiter(["One", "Two", "Three", "Four", "Five"], "-");
ArrayWithGivenDelimiter(
  ["How about no?", "I", "will", "not", "do", "it!"],
  "_"
);
