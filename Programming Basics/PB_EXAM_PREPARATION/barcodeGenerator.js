function barcodeGenerator(input) {
  let start = String(input[0]);
  let end = String(input[1]);

  let aStart = start[0];
  let bStart = start[1];
  let cStart = start[2];
  let dStart = start[3];

  let aEnd = end[0];
  let bEnd = end[1];
  let cEnd = end[2];
  let dEnd = end[3];

  let buff = "";

  for (let a = aStart; a <= aEnd; a++) {
    if (a % 2 === 0) {
      continue;
    }
    for (let b = bStart; b <= bEnd; b++) {
      if (b % 2 === 0) {
        continue;
      }
      for (let c = cStart; c <= cEnd; c++) {
        if (c % 2 === 0) {
          continue;
        }
        for (let d = dStart; d <= dEnd; d++) {
          if (d % 2 === 0) {
            continue;
          }
          buff += `${a}${b}${c}${d} `;
        }
      }
    }
  }
  console.log(buff);
}
barcodeGenerator(["2345", "6789"]);
