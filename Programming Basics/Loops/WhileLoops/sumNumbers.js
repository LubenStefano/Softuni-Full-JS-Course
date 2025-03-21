function sumNumbers(input){
    let index = 0;
    let targetNum = Number(input[index]);
    index++;
    let num=Number(input[index]);
    index++

    while(targetNum > num){
        let n = Number(input[index])
        index++;
        num += n;
    }
    console.log(num);
}
sumNumbers(["100", "10", "20", "30", "40"])