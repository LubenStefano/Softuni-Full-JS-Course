function piccolo(arr) {
    let parking = [];
    for (let car of arr) {
        let [direction, plate] = car.split(", ");
        if (direction === "IN") {
            if (!parking.includes(plate)) {
                parking.push(plate);
            }
        } else {
            if (parking.includes(plate)) {
                parking = parking.filter((x) => x !== plate);
            }
        }
    }
    parking.sort((a, b) => a.localeCompare(b));
    if (parking.length > 0) {
        console.log(parking.join("\n"));
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo
(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']); //CA2822UU CA2844AA CA9876HH CA9999TT
