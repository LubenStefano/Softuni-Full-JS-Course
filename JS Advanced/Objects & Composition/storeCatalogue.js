function storeCatalogue(arr) {
    arr = arr.sort( (a, b) => a.localeCompare(b))
    let products = {}
    for( line of arr){
        let [product, price] = line.split(" : ")
        products[product] = Number(price)
    }
    let currentLetter = ""
    for (let product in products){
        if(product[0] !== currentLetter){
            currentLetter = product[0]
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${products[product]}`);
    }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
