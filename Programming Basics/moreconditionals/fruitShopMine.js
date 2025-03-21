function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let n = Number(input[2]);

    let price = 0;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thurday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    price = n * 2.50; break;
                case "apple":
                    price = n * 1.20; break;
                case "orange":
                    price = n * 0.85; break;
                case "grapefruit":
                    price = n * 1.45; break;
                case "kiwi":
                    price = n * 2.70; break;
                case "pineapple":
                    price = n * 5.50; break;
                case "grapes":
                    price = n * 3.85; break;
                default: return "error";
            }break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    price = n * 2.70; break;
                case "apple":
                    price = n * 1.25; break;
                case "orange":
                    price = n * 0.90; break;
                case "grapefruit":
                    price = n * 1.60; break;
                case "kiwi":
                    price = n * 3; break;
                case "pineapple":
                    price = n * 5.60; break;
                case "grapes":
                    price = n * 4.20; break;
                default: return "error";
            }break;
        default: return "error";
    }
    console.log(price.toFixed(2))
}
fruitShop(["kiwi", "Monday", "2.5"])
