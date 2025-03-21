function fartoCel(input){
    let f = Number(input[0]);
    let c = f * 1.8 + 32;

    console.log(c.toFixed(2))
}
fartoCel(["-5.5"])