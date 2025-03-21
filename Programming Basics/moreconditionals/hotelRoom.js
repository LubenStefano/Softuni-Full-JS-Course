function hotelRoom(input) {
    let month = input[0]; //May,June,July,August,September, October//
    let night = Number(input[1]);

    let studio = 0;
    let apartament = 0;

    switch (month) {
        case "May":
        case "October":
            studio = night * 50;
            apartament = night * 65;
            if (night > 7 && night < 14) {
                studio = studio - (studio * 5 / 100);
            } else if (night > 14) {
                studio = studio - (studio * 30 / 100);
                apartament = apartament - (apartament * 10 / 100);
            } break;

        case "June":
        case "September":
            studio = night * 75.20;
            apartament = night * 68.70;
            if (night > 14) {
                studio = studio - (studio * 20 / 100);
                apartament = apartament - (apartament * 10 / 100);
            }
            break;
        case "July":
        case "August":
            studio = night * 76;
            apartament = night * 77;
            if (night > 14) {
                apartament = apartament - (apartament * 10 / 100);
            }
            break;
    }
    console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["August", "20"])