function companyUsers(arr){
let companies = {}
for (let line of arr) {
    let [company, id] = line.split(" -> ");
    if(!(company in companies)){
        companies[company] = [id]
    }else{
        if (!(companies[company].includes(id))){
           companies[company].push(id)  
        }
    }
}
let entries = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]))
for (let line of entries) {
    let [company, ids] = line
    console.log(company);
    for (let id of ids) {
        console.log(`-- ${id}`);
    }
}
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])
// companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111'])