function gcd(a, b){
    let start = a
    if(a < b){
        start = b
    }
for (let i =start ; i >= 1; i--) {
if(a % i === 0 && b % i === 0){
    console.log(i);
    break
}
}
}
gcd(6, 3)