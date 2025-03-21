function calc() {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let res = a + b;
    let box = document.getElementById('sum');
    box.value = res;
}
