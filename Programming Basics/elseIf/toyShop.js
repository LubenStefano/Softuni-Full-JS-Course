function toyShop(input){
    let trip = Number(input[0]);
    let puzzleA = Number(input[1]);
    let dollA = Number(input[2]);
    let teddyBearA = Number(input[3]);
    let minionA = Number(input[4]);
    let truckA = Number(input[5]);
    
    let puzzle = 2.60 * puzzleA;
    let doll = 3.00 * dollA;
    let teddyBear = 4.10 * teddyBearA;
    let minion = 8.20 * minionA;
    let truck = 2.00 * truckA;
    
    let totalToys = puzzleA + dollA + teddyBearA + minionA + truckA;
    let totalCost = puzzle + doll + teddyBear + minion + truck; 

    if(totalToys >= 50){
        let discount = totalCost * 25/100;
        totalCost = totalCost - discount;
    }else {
        totalCost = totalCost;
    }

    let rent = totalCost * 10/100;
    let profit = totalCost - rent;

    if(profit >= trip){
        totalProfit = (profit - trip).toFixed(2);
        console.log(`Yes! ${totalProfit} lv left.`)
    } else {
        moneyNeeded= (trip - profit).toFixed(2);
        console.log(`Not enough money! ${moneyNeeded} lv needed.`)
    }
}
toyShop(["320", 

"8", 

"2", 

"5", 

"5", 

"1"]) 