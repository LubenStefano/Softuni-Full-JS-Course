function filterEmployees(data, criteria){
    let employees = JSON.parse(data);
    let [key, value] = criteria.split('-');
    let count = 0;
    employees.forEach(employee => {
        if(employee[key] === value){
            console.log(`${count++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        }
    });
}