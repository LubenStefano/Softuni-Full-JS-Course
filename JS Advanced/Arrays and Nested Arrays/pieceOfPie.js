function pieceOfPie(pieFlavoursArr, targetOne, targetTwo) {
  let startIndex = pieFlavoursArr.indexOf(targetOne);
  let endIndex = pieFlavoursArr.indexOf(targetTwo);
  let result = pieFlavoursArr.slice(startIndex, endIndex + 1);
  return result;
}
// pieceOfPie
// (["Pumpkin Pie", "Key Lime Pie","Cherry Pie","Lemon Meringue Pie","Sugar Cream Pie",],
// "Key Lime Pie",
// "Lemon Meringue Pie");
pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
