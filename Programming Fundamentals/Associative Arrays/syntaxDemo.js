function schoolGrades(arr) {
    let studentsInfo = {};

    for (let info of arr) {
        let [name, ...grades] = info.split(" ");

        if (!(name in studentsInfo)) {
            studentsInfo[name] = grades;
        } else {
            studentsInfo[name].push(...grades);
        }
    }

    let entries = Object.entries(studentsInfo).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let [name, strGrades] of entries) {
        let grades = strGrades.map(Number);
        let gradeSum = grades.reduce((sum, grade) => sum + grade, 0);
        let averageGrade = gradeSum / grades.length;

        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);
