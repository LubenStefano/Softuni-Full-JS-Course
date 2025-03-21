function travelTime(arr) {
    let destinations = {};
    for (let line of arr) {
        let [country, town, price] = line.split(" > ");
        price = Number(price);
        if (!destinations.hasOwnProperty(country)) {
        destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(town)) {
        destinations[country][town] = price;
        } else if (price < destinations[country][town]) {
        destinations[country][town] = price;
        }
    }
    let entries = Object.entries(destinations).sort((a, b) =>
        a[0].localeCompare(b[0])
    );
    for (let [country, towns] of entries) {
        let result = `${country} -> `;
        let townsEntries = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        for (let [town, price] of townsEntries) {
        result += `${town} -> ${price} `;
        }
        console.log(result);
    }
}
travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ]);
