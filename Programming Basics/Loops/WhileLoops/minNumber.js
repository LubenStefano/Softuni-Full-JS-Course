function minNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let min = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let n = Number(command);

        if (n < min) {
            min = n;
        }

        command = input[index];
        index++;
    }
    console.log(min)
}
minNumber(["-1", "-2", "Stop"])