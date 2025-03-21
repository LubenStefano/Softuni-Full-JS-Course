function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let max = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        n = Number(command);

        if (n > max) {
            max = n
        }
        command = input[index];
        index++;
    }
    console.log(max)
}
maxNumber(["-1", "-2","-22", "11","-27","26","2222", "Stop"])