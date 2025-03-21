function charactersInRange(char1, char2) {
  let start = char1.charCodeAt();
  let end = char2.charCodeAt();
  let characters = "";
  if (start < end) {
    for (let i = start + 1; i < end; i++) {
      let character = String.fromCharCode(i);
      characters += character + " ";
    }
  } else {
    for (let i = end + 1; i < start; i++) {
      let character = String.fromCharCode(i);
      characters += character + " ";
    }
  }
  console.log(characters);
}
charactersInRange(
  "z",

  "d"
);
