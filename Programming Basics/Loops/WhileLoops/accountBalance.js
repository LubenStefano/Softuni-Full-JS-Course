function accountBalance(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalSum = 0;

  while (command !== "NoMoreMoney") {
    let money = Number(command);
    command = input[index];
    index++;
    if (money > 0) {
      totalSum += money;
      console.log(`Increase: ${money.toFixed(2)}`);
    } else {
      console.log("Invalid operation!");
      break;
    }
  }
  console.log(`Total: ${totalSum.toFixed(2)}`);
}
accountBalance(["120", "45.55", "-150"]);
