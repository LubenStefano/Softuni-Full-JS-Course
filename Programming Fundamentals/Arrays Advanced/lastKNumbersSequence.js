function lastKNumbersSequence(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let lastK = arr.slice(-k);
        let sum = 0;
        for (let num of lastK) {
            sum += num;
        }
        arr.push(sum);
    }
    console.log(arr.join(" "));
    /* обяснение: arr.slice(-k) взима последните k елемента от arr, ако k = 3 и arr = [1, 1, 2, 4, 7, 13] -> arr.slice(-3) ще върне [4, 7, 13], 
    arr.slice(-k) е същото като arr.slice(arr.length - k), arr.slice(3) ще върне [4, 7, 13] */

}
lastKNumbersSequence(6, 3);// 1 1 2 4 7 13