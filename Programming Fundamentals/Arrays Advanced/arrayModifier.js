function arrayModifier(arr){
let numbers = arr.shift().split(" ").map(Number);
let command = arr.shift();
while(command !== "end"){
    let [action, index1, index2] = command.split(" ")
    index1 = Number(index1);
    index2 = Number(index2);
    let num1 = numbers[index1]
    let num2 = numbers[index2]

    switch(action){
        case "swap":
        numbers.splice(index1, 1, num2)
        numbers.splice(index2, 1, num1)
        break;
        case "multiply":
        let multiN = num1 * num2;
        numbers.splice(index1, 1, multiN)
        break;
        case "decrease":
            numbers = numbers.map(n => n -= 1)
        break;
    }
    command = arr.shift();
}
console.log(numbers.join(", "));
}
arrayModifier([

    '23 -2 321 87 42 90 -123',
    
    'swap 1 3',
    
    'swap 3 6',
    
    'swap 1 0',
    
    'multiply 1 2',
    
    'multiply 2 1',
    
    'decrease',
    
    'end'
    
    ])