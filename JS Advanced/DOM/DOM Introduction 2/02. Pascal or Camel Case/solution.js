function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;

  let result = [];
  if (convention === "Camel Case") {
    text = text.split(" ");
    let firstWord = text.shift();
    firstWord = firstWord[0].toLowerCase() + firstWord.slice(1).toLowerCase();
    result.push(firstWord);
    for (let word of text) {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result.push(word);
    }
  } else if (convention === "Pascal Case") {
    text = text.split(" ");
    let firstWord = text.shift();
    firstWord = firstWord[0].toUpperCase() + firstWord.slice(1).toLowerCase();
    result.push(firstWord);
    for (let word of text) {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      result.push(word);
    }
  } else {
    result.push("Error!");
  }
  document.getElementById("result").innerHTML = result.join("");
  console.log(result);
}
