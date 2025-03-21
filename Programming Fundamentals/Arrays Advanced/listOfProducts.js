// function listOfProducts(products) {
//     products.sort((a, b) => a.localeCompare(b) || a.length - b.length )
//     for (let i = 0; i < products.length; i ++) {
//         console.log(`${i+1}.${products[i]}`); 
//     }
// }
function listOfProducts (arr) {
    let sorted = arr.sort();
    for (let n of sorted) {
        console.log((arr.indexOf(n) + 1) + '.' + n);
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])