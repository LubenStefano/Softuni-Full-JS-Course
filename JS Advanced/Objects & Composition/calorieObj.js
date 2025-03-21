function calorieObj(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i += 2) {
    res[arr[i]] = Number(arr[i + 1]);
  }
  console.log(res);
}
calorieObj(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
