function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let solution = 0;
    let evenOrOdd = "";

    switch (operator) {
        case "+":
            solution = n1 + n2;
            if (solution % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${solution} - ${evenOrOdd}`); break;
        case "-":
            solution = n1 - n2;
            if (solution % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${solution} - ${evenOrOdd}`); break;    
        case "*":
            solution = n1 * n2;
            if (solution % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${solution} - ${evenOrOdd}`); break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                solution = n1 / n2;
                console.log(`${n1} / ${n2} = ${solution.toFixed(2)}`);
            } break;
        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                solution = n1 % n2;
                console.log(`${n1} % ${n2} = ${solution}`);
            } break;
    }

}
operationsBetweenNumbers(["7",

"3",

"*"])