function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    let price = 0;

    if (city === "Sofia") {
        if (product === "coffee") {
            price = 0.50 * amount;
        } else if (product === "water") {
            price = 0.80 * amount;
        } else if (product === "beer") {
            price = 1.20 * amount;
        } else if (product === "sweets") {
            price = 1.45 * amount;
        } else {
            price = 1.60 * amount;
        }

    } else if (city === "Plovdiv") {
        if (product === "coffee") {
            price = 0.40 * amount;
        }
        else if (product === "water") {
            price = 0.70 * amount;
        }
        else if (product === "beer") {
            price = 1.15 * amount;
        }
        else if (product === "sweets") {
            price = 1.30 * amount;
        }
        else {
            price = 1.50 * amount;
        }
    } else if (city === "Varna") {
        if (product === "coffee") {
            price = 0.45 * amount;
        }
        else if (product === "water") {
            price = 0.70 * amount;
        }
        else if (product === "beer") {
            price = 1.10 * amount;
        }
        else if (product === "sweets") {
            price = 1.35 * amount;
        }
        else {
            price = 1.55 * amount;
        }
    }
    console.log(price)
}
smallShop(["sweets", "Sofia", "2.23"])