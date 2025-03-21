function furniture(arr) {
    let line = arr.shift();
    let total = 0;
    let products = [];
    while (line !== 'Purchase') {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
        let match = pattern.exec(line);
        if (match) {
            let { name, price, quantity } = match.groups;
            products.push(name);
            total += Number(price) * Number(quantity);
        }
        line = arr.shift();
    }
    console.log('Bought furniture:');
    products.forEach(x => console.log(x));
    console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase'])