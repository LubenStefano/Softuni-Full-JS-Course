function storeProvision(currentStockArr, orderedStockArr) {
  let store = {};
  for (let i = 0; i < currentStockArr.length; i += 2) {
    let product = currentStockArr[i];
    let qty = Number(currentStockArr[i + 1]);
    store[product] = qty;
  }
  for (let i = 0; i < orderedStockArr.length; i += 2) {
    let product = orderedStockArr[i];
    let qty = Number(orderedStockArr[i + 1]);
    if (!store.hasOwnProperty(product)) {
      store[product] = qty;
    } else {
      store[product] += qty;
    }
  }
  let entries = Object.entries(store);
  for (let [product, qty] of entries) {
    console.log(`${product} -> ${qty}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
