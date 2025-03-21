function workout(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let dayOneKm = Number(input[index]);
  index++;

  let totalKm = dayOneKm;
  let km = dayOneKm;

  for (let i = 0; i < days; i++) {
    let k = Number(input[index]);
    index++;
    totalKm += (k / 100) * totalKm;
    km += totalKm;
  }
  if (km >= 1000) {
    console.log(
      `You've done a great job running ${Math.ceil(km - 1000)} more kilometers!`
    );
  } else {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        1000 - km
      )} more kilometers`
    );
  }
}
workout(["4", "100", "30", "50", "60", "80"]);
