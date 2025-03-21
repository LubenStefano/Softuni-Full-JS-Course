function townPopulation(arr) {
  let towns = {};
  for (let info of arr) {
    let [city, population] = info.split(" <-> ");
    if (towns[city] !== undefined) {
      towns[city] += Number(population);
    } else {
      towns[city] = Number(population);
    }
  }
  for (const city in towns) {
    console.log(`${city} : ${towns[city]}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);
