function extract(id) {
  let matched = "";
  let pattern = /\(([^)]+)\)/g;
  let text = document.getElementById(id).textContent;
  let result = text.match(pattern);
  for (let word of result) {
    word = word.slice(1, word.length - 1);
    matched += word + "; ";
  }
  matched = matched.slice(0, matched.length - 2);
  return matched;
}
