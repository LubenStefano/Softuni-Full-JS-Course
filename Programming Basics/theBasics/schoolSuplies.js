function schoolSuplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparat = Number(input[2]);
    let discount = Number(input[3] / 100);
    let pensCost = pens * 5.80;
    let markersCost = markers * 7.20;
    let preparatCost = preparat * 1.20;
    let sum = pensCost + markersCost + preparatCost;
    let discountPercentage = sum * discount;
    let totalSum = sum - discountPercentage;

    console.log(totalSum)
}
schoolSuplies(["4", "2", "5", "13"])