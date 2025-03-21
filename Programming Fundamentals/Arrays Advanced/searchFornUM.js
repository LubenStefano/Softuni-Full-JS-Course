function searchForNum(arr1, arr2) {
  let newArr = arr1.slice(0, arr2[0]);
  newArr.splice(0, arr2[1]);
  let encounter = 0;
  for (const n of newArr) {
    if (arr2[2] === n) {
      encounter++;
    }
  }
  console.log(`Number ${arr2[2]} occurs ${encounter} times.`);
}
searchForNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);
