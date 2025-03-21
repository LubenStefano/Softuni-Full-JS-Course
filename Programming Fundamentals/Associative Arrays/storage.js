function storage(arr) {
  let items = {};
  for (let info of arr) {
    let [item, qty] = info.split(" ");
    if (!items.hasOwnProperty(item)) {
      items[item] = Number(qty);
    } else {
      items[item] += Number(qty);
    }
  }
  let entries = Object.entries(items);
  for (let [item, qty] of entries) {
    console.log(`${item} -> ${qty}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
