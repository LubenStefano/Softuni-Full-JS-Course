function cars(arr){
    let cars = {}
    let carsObj = {}; // Add missing object declaration

    let commands = {
        create: (name, inherits, parent) => {
            carsObj[name] = inherits ? Object.create(carsObj[parent]) : {}; // Replace 'cars' with 'carsObj'
        },
        set: (name, key, value) => {
            carsObj[name][key] = value; // Replace 'cars' with 'carsObj'
        },
        print: (name) => {
            let result = [];
            for (let key in carsObj[name]) {
                result.push(`${key}:${carsObj[name][key]}`);
            }
            console.log(result.join(", "));
        }
    };
    arr.forEach(line => {
        let [command, name, key, value] = line.split(" ");
        commands[command](name, key, value);
    });
}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])