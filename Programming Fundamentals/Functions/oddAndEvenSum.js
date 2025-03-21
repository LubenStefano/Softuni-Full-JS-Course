function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < String(num).length;  i++) {
       let currNum = Number(String(num)[i]);
       if (currNum % 2 == 0) {
        evenSum += currNum;
       }else{
        oddSum += currNum;
       }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    // let evenSum = 0;
    // let oddSum = 0;
    // for(n of num.toString()){
    //     if(Number(n) % 2 ===0){
    //         evenSum += Number(n)
    //     }else{
    //         oddSum += Number(n)
    //     }
    // }
    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)