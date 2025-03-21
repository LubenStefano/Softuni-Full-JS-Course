function towns(townsInfo) {
  let allTowns = [];
  let towns = {};
  for (let townLine of townsInfo) {
    let [town, latitude, longitude] = townLine.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    towns = { town, latitude, longitude };
    allTowns.push(towns);
  }
  for (let town of allTowns) {
    console.log(town); 
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
