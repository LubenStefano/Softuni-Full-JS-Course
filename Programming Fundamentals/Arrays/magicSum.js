function magicSum(arr, goalNum) {
    let  result = [];
    for(let i =0;i<arr.length;i++){
     let currNum = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            let nextNum = arr[j]
            if (currNum + nextNum === goalNum){
                console.log(`${currNum} ${nextNum}`);
            }
        }
    } 
}
magicSum([14, 20, 60, 13, 7, 19, 8],

    27)