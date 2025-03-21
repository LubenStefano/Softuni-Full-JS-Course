function biggestElem(matrix){
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
        let currentMax = Math.max(...matrix[i]);
        if (currentMax > max) {
            max = currentMax;
        }
    }
    return max;
}
biggestElem([[20, 50, 10],
        [8, 33, 145]])