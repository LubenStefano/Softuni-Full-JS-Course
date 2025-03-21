function fruit(fruit, grams, pricePerKilo){
let moneyNeeded = grams/1000 * pricePerKilo
console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
fruit('apple', 1563, 2.35)