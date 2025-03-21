function yardGreening(input){
    let area = Number(input[0]);
    let Sum = area * 7.61;
    let discount = Sum * 0.18;
    let discountedSum = Sum - discount;
    console.log(`The final price is: ${discountedSum} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["550"])