function pcStore(input) {
  let cpu = Number(input[0]) * 1.57;
  let gpu = Number(input[1]) * 1.57;
  let ram = Number(input[2]) * 1.57;
  let nRam = Number(input[3]);
  let percentageDiscount = Number(input[4]);

  let totalCost =
    cpu -
    cpu * percentageDiscount +
    (gpu - gpu * percentageDiscount) +
    ram * nRam;

  console.log(`Money needed - ${totalCost.toFixed(2)} leva.`);
}
pcStore(["200", "100", "80", "1", "0.01"]);
