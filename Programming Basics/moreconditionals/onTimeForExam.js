function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let examTimeInMinutes = (examHour * 60) + examMinute;
    let arriveTimeInMinutes = (arriveHour * 60) + arriveMinute;


    if (examTimeInMinutes < arriveTimeInMinutes) {
        console.log("Late");

        let difference = arriveTimeInMinutes - examTimeInMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;


        if (difference >= 60) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`)
            } else {
                console.log(`${hours}:${minutes} hours after the start`)
            }
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    } else if ((examTimeInMinutes - arriveTimeInMinutes) > 30) {
        console.log("Early");

        let difference = examTimeInMinutes - arriveTimeInMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;

        if (difference >= 60) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`)
            } else {
                console.log(`${hours}:${minutes} hours before the start`)
            }
        } else {
            console.log(`${minutes} minutes before the start`);
        }
    } else {
        console.log("On time");
        
        let difference = examTimeInMinutes - arriveTimeInMinutes;
        let minutes = difference % 60;
       
        if (minutes > 0) {
            console.log(`${minutes} minutes before the start`)
        }
    }
}


onTimeForExam(["9",

"30",

"9",

"50"])