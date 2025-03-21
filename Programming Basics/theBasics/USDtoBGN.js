function usdToBgn(input){
    let usd = Number(input[0])
    let usdExchangeRate = 1.79549;
    let lev = usd * usdExchangeRate ;

    console.log(lev)
}

usdToBgn(["485"])

