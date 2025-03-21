function bonusScore(input){
    let a = Number(input[0]);
    let bonus = 0;

    if(a <= 100){
        bonus = 5;
    } else if(a > 100 && a < 1000){
        bonus = a * 20/100;
    }else{
        bonus = a * 10/100;
    }

    if(a % 2 === 0){
        bonus += 1;
    }else if(a % 10 === 5){ //защо да е ако се дели на 10, то да има остатък 5?//
        bonus += 2;
    }

    console.log(bonus);
    console.log(a + bonus);
}
bonusScore(["15875"]) 