function histo(input) {
  let numsCount = Number(input[0]);

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;

  for (let i = 1; i <= numsCount; i++) {
    let num = Number(input[i]);
    if (num < 200) {
        count1++;
    } else if (num >= 200 && num < 400) {
        count2++;
    } else if (num >= 400 && num < 600) {
        count3++;
    } else if (num >= 600 && num < 800) {
        count4++;
    } else {
        count5++;
    }
  }

  let p1 = (count1 / numsCount) * 100;
  let p2 = (count2 / numsCount) * 100;
  let p3 = (count3 / numsCount) * 100;
  let p4 = (count4 / numsCount) * 100;
  let p5 = (count5 / numsCount) * 100;

  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
histo(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])
