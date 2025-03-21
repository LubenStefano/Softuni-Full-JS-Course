function sameNums(num) {
  num = String(num).split("");
  let sum = Number(num[0]);
  let o = true;
  for (let i = 1; i < num.length; i++) {
    sum += Number(num[i]);
    if (num[0] !== num[i]) {
      o = false;
    }
  }
  console.log(o);
  console.log(sum);
}
sameNums(1234);
