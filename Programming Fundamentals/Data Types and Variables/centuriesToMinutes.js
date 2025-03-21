function century(century) {
  let years = Math.trunc(century * 100);
  let days = Math.trunc(years * 365.2422);
  let hours = Math.trunc(days * 24);
  let minutes = Math.trunc(hours * 60);

  console.log(
    `${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}
century(5);
