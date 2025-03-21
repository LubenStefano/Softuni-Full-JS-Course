function rotateArr(arr, k) {
for(let i = 1; i <= k; i++){
    let n = arr.pop()
    arr.unshift(n)
}
console.log(arr.join(" "));
}
// rotateArr(["1", "2", "3", "4"], 2);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
