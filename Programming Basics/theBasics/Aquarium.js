function aquarium(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let space = lenght * height * width;
    let spaceInLeters = space / 1000;
    let occupiedSpace = percentage / 100;
    let water = spaceInLeters * (1 - occupiedSpace);

    console.log(water)
}
aquarium(["105 ", "77 ", "89 ", "18.5 "])