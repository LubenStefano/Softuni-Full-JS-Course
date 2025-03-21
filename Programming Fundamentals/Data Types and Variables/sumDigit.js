function sumDigit(num) {
    let sum=0;
    for (let i = 0; i < String(num).length; i++) {
        let sDigit = String(num)[i];
        sum += Number(sDigit);
    }
    console.log(sum);
}
sumDigit(97561)