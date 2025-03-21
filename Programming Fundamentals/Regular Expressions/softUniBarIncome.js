function softUniBarIncome(arr) {
  let line = arr.shift();
  let total = 0;
  while (line !== "end of shift") {
    let pattern =
      /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/g;
    let match = pattern.exec(line);
    if (match) {
      let { name, product, quantity, price } = match.groups;
      let totalPrice = Number(quantity) * Number(price);
      total += totalPrice;
      console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }
    line = arr.shift();
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",

  "%Maria%<Cola>|1|2.4$",

  "end of shift",
]);
