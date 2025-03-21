function demo() {
    let person = {
        //key: value,
        name:"Lubi",
        age: 18,
        isStudent: true,
    }
    console.log(person); // { name: 'Lubi', age: '18', isStudent: true }

    console.log(person.name) // Lubi 
    console.log(person["name"]) // Lubi

    person.gender = "male"; //добавяне на ново свойство
    person["eyesColor"] = "brown"; //добавяне на ново свойство

    person.name = "Luben"; //промяна на стойността на свойство
    let functions = {
        sayHello: function(){
            return "Hello";
        },
        multiplication: function(a, b){
            return a * b;
        }    }
    console.log(functions.sayHello()); // Hello
    console.log(functions.multiplication(5,5 )); // 25

    let keys = Object.keys(person) // връща масив с всички ключове
    console.log(keys); //['name', 'age', 'isStudent', 'gender', 'eyesColor']

    let values = Object.values(person) // връща масив с всички стойности 
    console.log(values); //['Luben', 18, true, 'male', 'brown']

    let entries = Object.entries(person)
    console.log(entries[0]); // [['name', 'Luben']
    console.log(entries[1]); // [['age', 18]


    let person2 = person; // person2 и person са едно и също нещо,сочат към един и същ обект
    console.log(person)
    console.log(person2)

    let person3 = JSON.parse(JSON.stringify(person)); // прави копие на обекта- deep copy(копира и вложените обекти)
    console.log(person3)

    let person4 = Object.assign({}, person); // прави копие на обекта shallow copy(не копира вложените обекти)
    console.log(person4);
}
//demo()

function secondDemo(){
    let person = {
        name: "Lubi",
        age: 18,
        isStudent: true,
        dog: [{
            name: "Aya",
            age: 4
        },{
            name: "Rex",
            age: 3
        }]
    }
    // let person2 = Object.assign({}, person); //отново сочи към един и същ обект 
    let person2 = JSON.parse(JSON.stringify(person)); // прави копие на обекта- deep copy(копира и вложените обекти)
    person.dog[0].age = 5;

    console.log(person.dog[0].age) 
    console.log(person2.dog[0].age) 
}
secondDemo()