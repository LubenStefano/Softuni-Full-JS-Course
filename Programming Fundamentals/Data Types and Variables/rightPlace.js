function rightPlace(string, char, result) {
  let edit = string.replace("_", char);
  if (edit === result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng","o","Strong");
