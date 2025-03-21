function convertToObject(string) {
  let parsed = JSON.parse(string);
  for (let key in parsed) {
    console.log(`${key}: ${parsed[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
