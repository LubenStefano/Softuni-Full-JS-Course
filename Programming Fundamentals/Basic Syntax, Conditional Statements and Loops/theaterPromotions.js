function theatrePromotions(day, age) {
  let price = 0;
  let isError = false;
  if (0 <= age && age <= 18) {
    if (day === "Weekday") {
      price = 12;
    } else if (day === "Weekend") {
      price = 15;
    } else {
      price = 5;
    }
  } else if (18 < age && age <= 64) {
    if (day === "Weekday") {
      price = 18;
    } else if (day === "Weekend") {
      price = 20;
    } else {
      price = 12;
    }
  } else if (64 < age && age <= 122) {
    if (day === "Weekday") {
      price = 12;
    } else if (day === "Weekend") {
      price = 15;
    } else {
      price = 10;
    }
  } else {
    isError = true;
  }
  if (isError === true) {
    console.log("Error!");
  } else {
    console.log(`${price}$`);
  }
}
theatrePromotions("Holiday", 15);
