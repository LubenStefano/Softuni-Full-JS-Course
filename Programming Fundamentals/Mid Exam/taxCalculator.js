function taxCalculator(arr) {
  let command = arr.shift();
  let cars = command.split(">>");
  let totalTax = 0;
  let tax = 0;
  for (let car of cars) {
    let [type, yearsInUse, kilos] = car.split(" ");
    yearsInUse = Number(yearsInUse);
    kilos = Number(kilos);
    if (type === "family") {
      tax = 50 - 5 * yearsInUse + 12 * Math.floor(kilos / 3000);
    } else if (type === "heavyDuty") {
      tax = 80 - 8 * yearsInUse + 14 * Math.floor(kilos / 9000);
    } else if (type === "sports") {
      tax = 100 - 9 * yearsInUse + 18 * Math.floor(kilos / 2000);
    } else {
      console.log("Invalid car type.");
      continue;
    }
    totalTax += tax;
    console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
  }
  console.log(
    `The National Revenue Agency will collect ${totalTax.toFixed(
      2
    )} euros in taxes.`
  );
}
taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
