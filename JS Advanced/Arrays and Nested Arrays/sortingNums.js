function sortingNums(arr) {
  let n = arr.length / 2;
  let sorted = arr.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < n; i++) {
    let smallest = sorted.shift();
    let biggest = sorted.pop();
    result.push(smallest);
    result.push(biggest);
  }
  return result
}
// sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
sortingNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);
