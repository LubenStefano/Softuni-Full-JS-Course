function everyNthElem(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result
}
// everyNthElem(["5", "20", "31", "4", "20"],2 );
everyNthElem(["dsa", "asd", "test", "tset"], 2);
// everyNthElem(['1', '2', '3', '4', '5'], 6)
