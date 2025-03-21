function godzVsKong(input){
    let budget = Number(input[0]);
    let statistsN = Number(input[1]);
    let priceFor1statist = Number(input[2])

    let priceClothing = statistsN * priceFor1statist;
    let decor = budget * 0.10;
    let decorPlusClothing = decor + priceClothing;
    if(statistsN > 150){
        discount = statistsN * (priceFor1statist * 10/100);
        priceClothing = priceClothing - discount;
        decorPlusClothing = decor + priceClothing
    } else{
    }
    if(decor + priceClothing > budget){
        moneyNeeded = decorPlusClothing - budget;
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else{
        let moneyLeft = budget - decorPlusClothing;
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}
godzVsKong(["9587.88", 

"222", 

"55.68"]) 