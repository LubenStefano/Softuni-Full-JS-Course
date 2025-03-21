function blackFlag(arr) {
    let days = Number(arr[0]);
    let daulyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let plunderAmount = 0;

    for( let day = 1; day <= days; day++){
        plunderAmount += daulyPlunder;

        if(day % 3 === 0){
            plunderAmount += daulyPlunder * 50/100
        }
        if(day % 5 === 0){
            plunderAmount -= plunderAmount * 30/100
        }
    }
    if (plunderAmount >= expectedPlunder) {
        console.log(`Ahoy! ${plunderAmount.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(plunderAmount/expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag((["5",

"40",

"100"]))