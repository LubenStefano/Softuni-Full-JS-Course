function lastNumbersSequence(n, k){
    let result = [1];
    for (let i = 1; i < n; i++) {
        let nextElement = 0;
        for (let j = i - 1; j >= Math.max(0, i - k); j--) {
            nextElement += result[j];
        }
        result.push(nextElement);
    }
return result
}
lastNumbersSequence(6, 3)