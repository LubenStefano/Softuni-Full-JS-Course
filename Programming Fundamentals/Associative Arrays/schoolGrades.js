function schoolGrades(arr) {
    let studentsInfo = {}
    for (let info of arr) {
        let grades = info.split(" ")
        let name = grades.shift()
        if (!(name in studentsInfo)) {
            studentsInfo[name] = grades
        } else {
            for (let aGrade of grades) {
                studentsInfo[name].push(aGrade)
            }
        }
    }
    let entries = Object.entries(studentsInfo).sort((a, b) => a[0].localeCompare(b[0]))
    for (let [name, strGrades] of entries) {
        let grades = strGrades.map(Number)
        let gradeSum = 0
        let gradeCounter = 0
        for (let aGrade of grades) {
            gradeCounter++
            gradeSum += aGrade
        }
        let averageGrade = gradeSum / gradeCounter
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
        
    }
}
schoolGrades(
    ['Steven 3 5 6 4',

        'George 4 6',

        'Tammy 2 5 3',

        'Steven 6 3']
)