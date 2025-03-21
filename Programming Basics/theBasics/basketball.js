function basketballEquipment(input){
    let anualTax = Number(input[0]);
    let basketballShoes = anualTax - (anualTax * 40/100);
    let basketballClothes = basketballShoes - (basketballShoes * 20/100);
    let basketballBall = basketballClothes / 4;
    let basketBallAccessories = basketballBall / 5;
    let basketballAll = anualTax + basketballShoes + basketballClothes + basketballBall + basketBallAccessories;

    console.log(basketballAll);
}
basketballEquipment(["550"])