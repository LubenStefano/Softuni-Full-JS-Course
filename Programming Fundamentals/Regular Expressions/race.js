function race(arr) {
  let racers = arr.shift().split(", ");
  let racersObj = {};
  for (let racer of racers) {
    racersObj[racer] = 0;
  }
  let line = arr.shift();
  while (line !== "end of race") {
    let name = line.match(/[A-Za-z]/g).join("");
    let distance = line
      .match(/\d/g)
      .map(Number)
      .reduce((a, b) => a + b);
    if (racersObj.hasOwnProperty(name)) {
      racersObj[name] += distance;
    }
    line = arr.shift();
  }
  let sorted = Object.entries(racersObj).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sorted[0][0]}`);
  console.log(`2nd place: ${sorted[1][0]}`);
  console.log(`3rd place: ${sorted[2][0]}`);
}
race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",

  "Mi*&^%$ch123o!#$%#nne787) ",

  "%$$B(*&&)i89ll)*&) ",

  "R**(on%^&ald992) ",

  "T(*^^%immy77) ",

  "Ma10**$#g0g0g0i0e",

  "end of race",
]);
