function sumOfNums(n, m){
 n = Number(n)
 m = Number(m)
 let result = 0
 for (let i = n; i <= m; i++) {
    result += i
 }
 console.log(result);
}
sumOfNums('-8', '20')