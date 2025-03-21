function trapezoid(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);

    let trapezoidArea = ( a + b ) * h/2;
    console.log(trapezoidArea.toFixed(2));
}
trapezoid(["8", "13", "7"] )