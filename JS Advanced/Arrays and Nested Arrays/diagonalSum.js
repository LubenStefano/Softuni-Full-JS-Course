function diagonalSum(matrix){
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    console.log(sum + ' ' + sum);
}
diagonalSum([[20, 40], 
             [10, 60]]) // 80 50