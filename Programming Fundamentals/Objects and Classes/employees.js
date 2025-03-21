function employees(arr) {
  let people = [];
  let person = {};
  for (let name of arr) {
    let personalNumber = name.length;
    person.name = name;
    person.personalNumber = personalNumber;
    people.push(person);
    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNumber}`
    );
  }
}
employees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
