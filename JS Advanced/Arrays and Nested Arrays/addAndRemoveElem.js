function addAndRemoveElem(arr) {
  let curNum = 0;
  let result = [];
  for (const command of arr) {
    if (command === "add") {
      curNum++;
      result.push(curNum);
    } else {
      curNum++;
      result.pop();
    }
  }
  if (result.length === 0) {
    console.log("Empty");
  } else {
    for (const n of result) {
      console.log(n);
    }
  }
}
// addAndRemoveElem(["add", "add", "add", "add"]);
// addAndRemoveElem(["add", "add", "remove", "add", "add"]);
addAndRemoveElem(["remove", "remove", "remove"]);
