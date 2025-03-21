function vacation(input) {
  let index = 0;
  let vacationCost = Number(input[index]);
  index++;
  let availableMoney = Number(input[index]);
  index++;
  let action = input[index];
  index++;
  let actionMoney = Number(input[index]);
  index++;

  let spendCounter = 0;
  let daysCounter = 0;

  while (vacationCost > availableMoney) {
    daysCounter++;
    if (availableMoney < 0) {
      availableMoney = 0;
    }
    if (action === "save") {
      availableMoney += actionMoney;
      spendCounter = 0;
    } else if (action === "spend") {
      spendCounter++;
      availableMoney -= actionMoney;
    }

    if (spendCounter === 5) {
      console.log("You can't save the money.");
      console.log(daysCounter);
      break;
    }

    action = input[index];
    index++;
    actionMoney = Number(input[index]);
    index++;
  }
  if (vacationCost <= availableMoney) {
    console.log(`You saved the money for ${daysCounter} days.`);
  }
}
vacation([
  "250",

  "150",

  "spend",

  "50",

  "spend",

  "50",

  "save",

  "100",

  "save",

  "100",
]);
