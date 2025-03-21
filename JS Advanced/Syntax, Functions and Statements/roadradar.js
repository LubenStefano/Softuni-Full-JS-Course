function roadRadar(speed, area) {
  let speedLimit = 0;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
  }
  let status = "";
  let difference = speed - speedLimit;
  if (difference > 40) {
    status = "reckless driving";
  } else if (difference <= 40 && difference > 20) {
    status = "excessive speeding";
  } else {
    status = "speeding";
  }
  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}
// roadRadar(40, "city");
roadRadar(21, 'residential')
// roadRadar(120, 'interstate')
// roadRadar(200, 'motorway')
