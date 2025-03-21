function numberSum(input){
    let number= String(input[0]);
    let sum= 0;
    
    for(i = 0; i< number.length;i++){
        sum += Number(number[i]);
    }
    console.log(`The sum of the digits is:${sum}`)
}
numberSum(["564891"])