function sorting(arr) {
    let arrSorted = arr.sort((a, b) => b - a); // Sort the array in descending order
    let arrNew = [];
    while (arrSorted.length > 0) {
        let biggestNum = arrSorted.shift(); // Get the largest number from the beginning of the sorted array
        let smallestNum = arrSorted.pop(); // Get the smallest number from the end of the sorted array
        arrNew.push(biggestNum);
        arrNew.push(smallestNum);
    }
    console.log(arrNew.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); //94 1 69 2 63 3 52 18 31 21
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47] ); //690 2 47 6 45 7 34 19 32 32