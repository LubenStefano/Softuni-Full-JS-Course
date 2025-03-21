function aggregateElements(arr){
let sum = 0
let inverseSum = 0
let concatenate = ""
for (let n of arr) {
    sum += n
    inverseSum += 1/n
    concatenate += n
}
console.log(sum);
console.log(inverseSum);
console.log(concatenate);
}
aggregateElements([2, 4, 8, 16])