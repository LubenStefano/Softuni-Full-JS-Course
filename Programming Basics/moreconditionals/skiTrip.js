function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let review = input[2];

    let price = 0;

    switch (room) {
        case "room for one person":
            price = (days - 1) * 18;
            break;
        case "apartment":
            price = (days - 1) * 25;
            if (days < 10) {
                price = price - (price * 30 / 100);
            } else if (days >= 10 && days <= 15) {
                price = price - (price * 35 / 100);
            } else {
                price = price - (price * 50 / 100);
            }

            break;
        case "president apartment":
            price = (days - 1) * 35;
            if (days < 10) {
                price = price - (price * 10 / 100);
            } else if (days >= 10 && days <= 15) {
                price = price - (price * 15 / 100);
            } else {
                price = price - (price * 20 / 100);
            }
            break;
    }
    if (review === "positive") {
        console.log((price + (price * 25 / 100)).toFixed(2));
    } else {
        console.log((price - (price * 10 / 100)).toFixed(2));
    }

}
skiTrip(["2", "apartment", "positive"])