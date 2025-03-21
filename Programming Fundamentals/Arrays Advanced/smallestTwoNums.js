function smallestTwoNums(arr) {
    let arrSorted = arr.sort((a, b) => a-b)
    let smallest = arrSorted.slice(0,2)
    console.log(smallest.join(" "));
}
smallestTwoNums([3, 0, 10, 4, 7, 3])