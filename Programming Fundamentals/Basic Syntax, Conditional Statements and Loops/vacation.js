function vacation(people, group, day) {
  let pricePerPerson = 0;
  switch (day) {
    case "Friday":
      if (group === "Students") {
        pricePerPerson = 8.45;
      } else if (group === "Business") {
        pricePerPerson = 10.9;
      } else if (group === "Regular") {
        pricePerPerson = 15;
      }
      break;
    case "Saturday":
      if (group === "Students") {
        pricePerPerson = 9.8;
      } else if (group === "Business") {
        pricePerPerson = 15.6;
      } else if (group === "Regular") {
        pricePerPerson = 20;
      }
      break;
    case "Sunday":
      if (group === "Students") {
        pricePerPerson = 10.46;
      } else if (group === "Business") {
        pricePerPerson = 16;
      } else if (group === "Regular") {
        pricePerPerson = 22.5;
      }
      break;
  }
  let price = people * pricePerPerson;
  if (group === "Students" && people >= 30) {
    price = price - (price * 15) / 100;
  } else if (group === "Business" && people >= 100) {
    price = price - 10 * pricePerPerson;
  } else if (group === "Regular" && people >= 10 && people <= 20) {
    price = price - (price * 5) / 100;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
// vacation(
//   30,

//   "Students",

//   "Sunday"
// );
vacation(
  40,

  "Regular",

  "Saturday"
);
