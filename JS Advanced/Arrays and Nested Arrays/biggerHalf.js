function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    let result = sorted.slice(sorted.length / 2);
    return result;
  } else {
    let firstHalf = sorted.slice(0, sorted.length / 2);
    let secondHalf = sorted.slice(sorted.length / 2);
    if (firstHalf > secondHalf) {
      return firstHalf;
    } else {
      return secondHalf;
    }
  }
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
