function coin(input) {
  let change = Number(input[0]);
  let money = Math.floor(change * 100);

  let coinCounter = 0;

  while (money !== 0) {
    if (money >= 200) {
      money -= 200;
      coinCounter++;
    } else if (money >= 100) {
      money -= 100;
      coinCounter++;
    } else if (money >= 50) {
      money -= 50;
      coinCounter++;
    } else if (money >= 20) {
      money -= 20;
      coinCounter++;
    } else if (money >= 10) {
      money -= 10;
      coinCounter++;
    } else if (money >= 5) {
      money -= 5;
      coinCounter++;
    } else if (money >= 2) {
      money -= 2;
      coinCounter++;
    } else if (money >= 1) {
      money -= 1;
      coinCounter++;
    }
  }
  console.log(coinCounter);
}
coin(["2.73"]);
