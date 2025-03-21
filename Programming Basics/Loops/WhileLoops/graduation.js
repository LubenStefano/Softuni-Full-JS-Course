function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let grades = 1;
    let allMarksCounter = 0;
    let failCounter = 0;

    let failed = false;


    while (grades <= 12) {
        mark = Number(input[index]);
        index++;

        allMarksCounter += mark;


        if (mark < 4) {
            failCounter++
            continue;
        }
        if (failCounter >= 2) {
            failed = true
            break;
        }
        grades++;
    }
    if (!failed) {

        let avg = allMarksCounter / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`)

    } else {
        console.log(`${name} has been excluded at ${grades} grade`)
    }
}
graduation(["Mimi", "5",

    "5.5",

    "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])