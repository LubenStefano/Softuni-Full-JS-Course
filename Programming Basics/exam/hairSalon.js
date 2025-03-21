function hairSalon(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let money = 0;

  let targetReached = false;
  while (command !== "closed") {
    let type = command;
    if (type === "haircut") {
      let client = input[index];
      index++;
      if (client === "mens") {
        money += 15;
      } else if (client === "ladies") {
        money += 20;
      } else {
        money += 10;
      }
    } else {
      let typeColoring = input[index];
      index++;
      if (typeColoring === "touch up") {
        money += 20;
      } else {
        money += 30;
      }
    }
    if (money >= target) {
      targetReached = true;
      break;
    }
    command = input[index];
    index++;
  }
  if (!targetReached) {
    console.log(`Target not reached! You need ${target - money}lv. more.`);
    console.log(`Earned money: ${money}lv.`);
  } else {
    console.log(`You have reached your target for the day!`);
    console.log(`Earned money: ${money}lv.`);
  }
}
hairSalon(["50", "color", "full color", "haircut", "ladies"]);
