function spiceMustFlow(startingYeld) {
  let days = 0;
  let totalAmount = 0;

  while (startingYeld >= 100) {
    days++;
    totalAmount += startingYeld;
    startingYeld -= 10;

    if (totalAmount >= 26) {
      totalAmount -= 26;
    }
  }
  if (totalAmount >= 26) {
    totalAmount -= 26;
  }
  console.log(days);
  console.log(totalAmount);
}
spiceMustFlow(450);
