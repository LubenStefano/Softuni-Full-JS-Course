function histogram(input) {
    let index = 0;

    let n = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= n; i++) {
        let pNumber = Number(input[index]);
        index++;

        if (pNumber < 200) {
            p1Counter++;
        } else if (pNumber >= 200 && pNumber < 400) {
            p2Counter++;
        } else if (pNumber >= 400 && pNumber < 600) {
            p3Counter++;
        } else if (pNumber >= 600 && pNumber < 800) {
            p4Counter++;
        } else {
            p5Counter++;
        }
    }
    let p1CounterPercentage = p1Counter / n * 100;
    let p2CounterPercentage = p2Counter / n * 100;
    let p3CounterPercentage = p3Counter / n * 100;
    let p4CounterPercentage = p4Counter / n * 100;
    let p5CounterPercentage = p5Counter / n * 100
    
    console.log(p1CounterPercentage.toFixed(2) + "%")
    console.log(p2CounterPercentage.toFixed(2) + "%")
    console.log(p3CounterPercentage.toFixed(2) + "%")
    console.log(p4CounterPercentage.toFixed(2) + "%")
    console.log(p5CounterPercentage.toFixed(2) + "%")
}
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])
