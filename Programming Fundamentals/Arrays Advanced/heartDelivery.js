function heartDelivery(arr) {
    let neighborhood = arr.shift().split("@").map(Number);
    let currentPosition = 0;
    let jumpLength = 0;
    let failedHouses = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Love!") {
            break;
        }
        let command = arr[i].split(" ");
        let length = Number(command[1]);

        jumpLength = (currentPosition + length);
        if (jumpLength > neighborhood.length - 1) {
            jumpLength = 0;
        }
        currentPosition = jumpLength;

        if (neighborhood[jumpLength] === 0) {
            console.log(`Place ${jumpLength} already had Valentine's day.`);
        } else {
            neighborhood[jumpLength] -= 2;

            if (neighborhood[jumpLength] === 0) {
                console.log(`Place ${jumpLength} has Valentine's day.`);
            }
        }
    }

    failedHouses = neighborhood.filter((hearts) => hearts > 0).length;

    console.log(`Cupid's last position was ${currentPosition}.`);

    if (failedHouses === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failedHouses} places.`);
    }

}
heartDelivery(["2@4@2",

"Jump 2",

"Jump 2",

"Jump 8",

"Jump 3",

"Jump 1",

"Love!"])