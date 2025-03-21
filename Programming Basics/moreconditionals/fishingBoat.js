function fishingBoat(input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fishersN = Number(input[2]);

    let boatPrice = 0;

    if (season === "Spring") {
        boatPrice = 3000;
    } else if (season === "Summer" || season === "Autumn") {
        boatPrice = 4200;
    } else {
        boatPrice = 2600;
    }
    if (fishersN <= 6) {
        boatPrice = boatPrice - (boatPrice * 10 / 100);
    } else if (fishersN >= 7 && fishersN <= 11) {
        boatPrice = boatPrice - (boatPrice * 15 / 100);
    } else {
        boatPrice = boatPrice - (boatPrice * 25 / 100);
    }
    if ((fishersN % 2 === 0) && season !== "Autumn") {
        boatPrice = boatPrice - (boatPrice * 5 / 100);
    }
    if (groupBudget >= boatPrice) {
        console.log(`Yes! You have ${(groupBudget - boatPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(boatPrice - groupBudget).toFixed(2)} leva.`)
    }
}
fishingBoat(["2000", "Winter", "13"])