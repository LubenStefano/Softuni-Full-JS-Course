function salary(input) {
    let index = 0;
    let tabsN = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    for (let i = 0; i < tabsN; i++) {
        let currentTabs = input[index];
        index++;

        if (currentTabs === "Facebook") {
            salary -= 150;
        } else if (currentTabs === "Instagram") {
            salary -= 100;
        } else if (currentTabs === "Reddit") {
            salary -= 50;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary)
    }
}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])