function cinema(input){
    let projection = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    

    let price = 0;

    if(projection === "Premiere"){
         price = a * b * 12.00;
    }else if(projection === "Normal"){
         price = a * b * 7.50;
    }else{
         price = a * b * 5.00;
    }
    console.log(`${price.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"])