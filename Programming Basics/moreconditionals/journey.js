function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let country = "";
    let place = "";
    let price = 0;


    if (budget <= 100) {
        country = "Bulgaria";
        if (season === "summer") {
            place = "Camp";
            price = budget * 30 / 100;
        } else {
            place = "Hotel";
            price = budget * 70 / 100;
        }
    } else if (budget <= 1000) {
        country = "Balkans";
        if (season === "summer") {
            place = "Camp";
            price = budget * 40 / 100;
        } else {
            place = "Hotel";
            price = budget * 80 / 100;
        }
    } else {
        country = "Europe";
        place = "Hotel";
        price = budget * 90 / 100;
    }
    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(["678.53", "winter"])