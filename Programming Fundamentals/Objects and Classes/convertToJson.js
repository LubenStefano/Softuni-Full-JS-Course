function convertToJson(name, lastName, hairColor){
let person = {name, lastName, hairColor}
let parsed = JSON.stringify(person)
console.log(parsed);
}
convertToJson('George', 'Jones',

'Brown')