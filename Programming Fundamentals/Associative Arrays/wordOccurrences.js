function wordOccurrences(arr) {
  let wordInfo = {};

  for (let word of arr) {
    if (!(word in wordInfo)) {
      wordInfo[word] = 1;
    } else {
      wordInfo[word] += 1;
    }
  }
  let entries = Object.entries(wordInfo).sort((a, b) => b[1] - a[1]);
  for (const [word, count] of entries) {
    console.log(`${word} -> ${count} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
