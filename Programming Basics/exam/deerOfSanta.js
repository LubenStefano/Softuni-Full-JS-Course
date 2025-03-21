function deerOfSanta(input) {
  let days = Number(input[0]);
  let food = Number(input[1]);
  let foodPerDayForFirst = Number(input[2]);
  let foodPerDayForSecond = Number(input[3]);
  let foodPerDayForThird = Number(input[4]);

  let foodPerFirst = days * foodPerDayForFirst;
  let foodPerSecond = days * foodPerDayForSecond;
  let foodPerThird = days * foodPerDayForThird;

  let totalFoodEaten = foodPerFirst + foodPerSecond + foodPerThird;

  let difference = 0;
  if (food >= totalFoodEaten) {
    difference = food - totalFoodEaten;
    console.log(`${Math.floor(difference)} kilos of food left.`);
  } else {
    difference = totalFoodEaten - food;
    console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
  }
}
deerOfSanta(["5", "10", "2.1", "0.8", "11"]);
