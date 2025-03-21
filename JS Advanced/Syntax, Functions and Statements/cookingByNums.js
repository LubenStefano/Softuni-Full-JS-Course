function cookingByNums(n, a1, a2, a3, a4, a5) {
  let actions = [a1, a2, a3, a4, a5];
  for (const action of actions) {
    switch (action) {
      case "chop":
        n = n / 2;
        break;
      case "dice":
        n = Math.sqrt(n);
        break;
      case "spice":
        n += 1;
        break;
      case "bake":
        n *= 3;
        break;
      case "fillet":
        n = n - (n * 20) / 100;
        break;
    }
    console.log(n);
  }
}
// cookingByNums("32", "chop", "chop", "chop", "chop", "chop");
cookingByNums("9", "dice", "spice", "chop", "bake", "fillet");
