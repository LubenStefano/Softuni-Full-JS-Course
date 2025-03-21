function foodDelivery(input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vMenu = Number(input[2]);

    let chickenMenuPice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vMenuPrice = vMenu * 8.15;
    let sum= chickenMenuPice + fishMenuPrice + vMenuPrice;
    let desert= sum* 20/100;
    let totalSum = sum + desert + 2.50;

    console.log(totalSum)
}
foodDelivery(["9", "2", "6"])
