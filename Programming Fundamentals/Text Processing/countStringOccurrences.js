function countStringOccurrences(text, word) {
  text = text.split(" ");
  let counter = 0;
  for (let aWord of text) {
    if (aWord === word) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
);
