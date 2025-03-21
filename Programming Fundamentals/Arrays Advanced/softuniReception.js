function softuniReception(arr) {
let studentsPerHour =  Number(arr[0]) +  Number(arr[1]) +  Number(arr[2]);
let totalStudents = Number(arr[3])
let hours = 0;
while(totalStudents > 0){
    totalStudents-=studentsPerHour
    hours++
    if(hours % 4 === 0){
        hours++
    }
}
console.log(`Time needed: ${hours}h.`);
}
softuniReception(['1','2','3','45'])