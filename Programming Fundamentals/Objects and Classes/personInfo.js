function personInfo(firstName, lastName, age) {
    let person = {};

    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}
personInfo(
    "Peter",
    "Pan",
    "20"
);//{firstName: 'Peter', secondName: 'Pan', age: 20}
