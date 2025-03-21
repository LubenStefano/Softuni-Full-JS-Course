function courierExpress(input) {
  let bags = Number(input[0]);
  let typeExpress = input[1];
  let km = Number(input[2]);

  let cost = 0;
  let adding = 0;
  let addingPerKm = 0;
  switch (typeExpress) {
    case "standard":
      if (bags < 1) {
        cost = km * 0.03;
      } else if (bags >= 1 && bags < 10) {
        cost = km * 0.05;
      } else if (bags >= 10 && bags < 40) {
        cost = km * 0.1;
      } else if (bags >= 40 && bags < 90) {
        cost = km * 0.15;
      } else {
        cost = km * 0.2;
      }
      break;
    case "express":
      if (bags < 1) {
        adding = (0.03 * 80) / 100;
        addingPerKm = bags * adding;
        cost = km * 0.03 + addingPerKm * km;
      } else if (bags >= 1 && bags < 10) {
        adding = (0.05 * 40) / 100;
        addingPerKm = bags * adding;
        cost = km * 0.05 + addingPerKm * km;
      } else if (bags >= 10 && bags < 40) {
        adding = (0.1 * 5) / 100;
        addingPerKm = bags * adding;
        cost = km * 0.1 + addingPerKm * km;
      } else if (bags >= 40 && bags < 90) {
        adding = (0.15 * 2) / 100;
        addingPerKm = bags * adding;
        cost = km * 0.15 + addingPerKm * km;
      } else {
        adding = (0.2 * 1) / 100;
        addingPerKm = bags * adding;
        cost = km * 0.2 + addingPerKm * km;
      }
      break;
  }
  console.log(
    `The delivery of your shipment with weight of ${bags.toFixed(
      3
    )} kg. would cost ${cost.toFixed(2)} lv.`
  );
}
courierExpress(["20", "standard", "349"]);
