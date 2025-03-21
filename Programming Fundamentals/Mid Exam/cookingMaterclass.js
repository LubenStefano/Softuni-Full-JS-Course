function cookingMasterclass(arr) {
  let [budget, students, flourPrice, eggPrice, apronPrice] = arr.map(Number);

  let apronN = Math.ceil(students *  1.2);
  let flourN = students - Math.floor(students / 5);
  let total =apronN * apronPrice +10 * students * eggPrice +flourN * flourPrice;
  let neededMoney = total - budget;

  if (total <= budget) {
    console.log(`Items purchased for ${total.toFixed(2)}$.`);
  } else {
    console.log(`${neededMoney.toFixed(2)}$ more needed.`);
  }
}
cookingMasterclass(['50',
'2',
'1.0',
'0.10',
'10.0'])