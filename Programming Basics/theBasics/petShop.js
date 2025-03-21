function petStore(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let moneyForDogFood = dogFood * 2.50;
    let moneyForCatFood = catFood * 4;
    let totalSum = moneyForDogFood + moneyForCatFood;

    console.log(totalSum.toFixed(1))
}
petStore(["13", "9"])
