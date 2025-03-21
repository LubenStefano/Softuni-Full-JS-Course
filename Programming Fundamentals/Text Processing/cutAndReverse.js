function cutAndReverse(string){
let oneHalf = string.substring(0, string.length/2).split("").reverse().join("")
let otherHalf = string.substring(string.length/2).split("").reverse().join("")
console.log(oneHalf);
console.log(otherHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')