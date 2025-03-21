function subNums(arr, startIdx, endIdx) {
    if (typeof arr !== 'object') {
        return NaN
    }
    for (let element of arr) {
        if(typeof element !== "number"){
            return NaN
        }
    }
    if (startIdx < 0){
        startIdx = 0
    }
    if(endIdx > arr.length){
        endIdx = arr.length - 1
    }
    let sum = 0
    for(let i = startIdx; i <= endIdx; i ++){
        sum += arr[i]
    }
    return sum
}

subNums([10, 20, 30, 40, 50, 60], 3, Math.min(300, [10, 20, 30, 40, 50, 60].length - 1))
