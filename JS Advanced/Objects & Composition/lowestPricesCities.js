function lowestPricesCities(arr) {
    let products = []
    for(let town of arr){
        let [townName, name, price] = town.split(" | ")
        let product ={
            town: townName,
            name: name, 
            price: Number(price)
        }
        products.push(product)
    }
    let uniqueProducts = []
    for(let product of products){
        let productIndex = uniqueProducts.findIndex(p => p.name === product.name)
        if(productIndex === -1){
            uniqueProducts.push(product)
        }
        else{
            uniqueProducts[productIndex] = product
        }
    }
    for(let product of uniqueProducts){
        let lowestPrice = products.filter(p => p.name === product.name)
        .sort((a,b) => a.price - b.price)[0]
        console.log(`${lowestPrice.name} -> ${lowestPrice.price} (${lowestPrice.town})`);
    }
}
lowestPricesCities([
  "Sample Town | Sample Product | 1000",

  "Sample Town | Orange | 2",

  "Sample Town | Peach | 1",

  "Sofia | Orange | 3",

  "Sofia | Peach | 2",

  "New York | Sample Product | 1000.1",

  "New York | Burger | 10",
]);
