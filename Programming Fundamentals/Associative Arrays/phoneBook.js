function phonebook(arr) {
    let phonebook = {}
    for (let personalInfo of arr) {
        let [name, number] = personalInfo.split(" ")
        phonebook[name] = number
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}
phonebook(['George 0552554',

    'Peter 087587',

    'George 0453112',

    'Bill 0845344'])