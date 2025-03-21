function oddOccurrences(sentence) {
  lowered = sentence.toLowerCase();
  let words = lowered.split(" ");
  let counter = {};
  for (let word of words) {
    if (!(word in counter)) {
      counter[word] = 1;
    } else {
      counter[word] += 1;
    }
  }
  let entries = Object.entries(counter).filter((a) => a[1] % 2 !== 0);
  let buff = "";
  for (let [word, qty] of entries) {
    buff += word + " ";
  }
  console.log(buff);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
