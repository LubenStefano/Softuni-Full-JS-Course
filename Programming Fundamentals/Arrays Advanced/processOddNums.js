function processOddNums(arr) {
    let newArr=[]
    for (const i in arr) {
        if(i % 2 !== 0){
            newArr.unshift(arr[i] * 2)
        }
    }
    console.log(newArr.join(" "));
}
processOddNums([3, 0, 10, 4, 7, 3])