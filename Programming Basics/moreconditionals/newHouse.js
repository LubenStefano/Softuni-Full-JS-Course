function newHouse(input) {
    let flowersType = input[0];
    let flowersN = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;
    let change = 0;
    let moneyNeeded = 0;

    if (flowersType === "Roses") {
        if (flowersN > 80) {
            price = flowersN * 5 - ((flowersN * 5) * 10 / 100);
        } else {
            price = flowersN * 5;
        }
    } else if (flowersType === "Dahlias") {
        if (flowersN > 90) {
            price = flowersN * 3.80 - ((flowersN * 3.80) * 15 / 100);
        } else {
            price = flowersN * 3.80;
        }
    } else if (flowersType === "Tulips") {
        if (flowersN > 80) {
            price = flowersN * 2.80 - ((flowersN * 2.80) * 15 / 100);
        } else {
            price = flowersN * 2.80;
        }
    } else if (flowersType === "Narcissus") {
        if (flowersN < 120) {
            price = flowersN * 3 + ((flowersN * 3) * 15 / 100);
        } else {
            price = flowersN * 3;
        }
    } else {
        if (flowersN < 80) {
            price = flowersN * 2.50 + ((flowersN * 2.50) * 20 / 100);
        } else {
            price = flowersN * 2.50;
        }
    }
    if (budget >= price) {
        change = budget - price;
        console.log(`Hey, you have a great garden with ${flowersN} ${flowersType} and ${change.toFixed(2)} leva left.`)
    } else {
        moneyNeeded = price - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
   
}
newHouse(["Narcissus", 
    "119", "360"])