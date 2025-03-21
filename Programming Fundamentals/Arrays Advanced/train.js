function train(arr) {
  let wagon = arr[0].split(" ").map(Number);
  let capacity = Number(arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let current = arr[i].split(" ");
    if (current.includes("Add")) {
      wagon.push(Number(current[1]));
    } else {
      for (let j in wagon) {
        if (wagon[j] + Number(current[0]) <= capacity) {
          wagon[j] += Number(current[0]);
          break;
        } else {
          continue;
        }
      }
    }
  }
  console.log(wagon.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
