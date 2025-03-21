function wordsTracker(arr) {
  let counter = {};
  let searchedWords = arr.shift().split(" ");

  for (let word of searchedWords) {
    counter[word] = 0;
  }
  for (let word of arr) {
    if (word in counter) {
      counter[word] += 1;
    }
  }
  let entries = Object.entries(counter).sort((a, b) => b[1] - a[1]);
  for (let [word, qty] of entries) {
    console.log(`${word} - ${qty}`);
  }
}
wordsTracker([
  "is the",

  "first",
  "sentence",
  "Here",
  "is",

  "another",
  "the",
  "And",
  "finally",
  "the",

  "the",
  "sentence",
]);
