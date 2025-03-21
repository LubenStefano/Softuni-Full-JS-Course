function townsToJSON(arr) {
    let towns = [];
    const keys = arr[0].split("|").filter(Boolean).map(x => x.trim());
    for (let i = 1; i < arr.length; i++) {
        const values = arr[i].split("|").filter(Boolean).map(x => x.trim());
        const town = {};
        keys.forEach((key, j) => {
            town[key] = isNaN(values[j]) ? values[j] : (Number(values[j])).toFixed(2);
        });
        towns.push(town);
    }
    console.log(JSON.stringify(towns));
}
townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia El | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
