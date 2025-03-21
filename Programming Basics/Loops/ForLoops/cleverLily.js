function cleverLily(input) {
    let age = Number(input[0]);
    let washingmachinePrice = Number(input[1]);
    let toyPricePerOne = Number(input[2]);

    let sum = 0;
    let toy = 0;
    let currentMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sum += currentMoney;
            currentMoney += 10; 
            sum--;
        } else {
            toy++;
        }
       
    }
    sum += toy * toyPricePerOne;
    let diff = Math.abs(washingmachinePrice - sum);
    if (sum >= washingmachinePrice) {

        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }
}
cleverLily(["21",

    "1570.98",

    "3"])