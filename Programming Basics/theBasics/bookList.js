function bookList(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let day = Number(input[2]);
    let totalHours = pages / pagesPerHour; 
    
    console.log(totalHours / day)
}
bookList(["432", "15", "4"])