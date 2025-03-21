function lunchBreak(input){
    let seriesName = input[0];
    let episodeLenght = Number(input[1]);
    let breakTime = Number(input[2]);

    let eatingTime = breakTime/8;
    let restTime = breakTime/4;

    let timeLeft = breakTime - (eatingTime + restTime);

    if(timeLeft >= episodeLenght){
        let leftTime = timeLeft - episodeLenght;
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(leftTime)} minutes free time.`)
    } else{
        let timeNeeded = episodeLenght - timeLeft;
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf", 

"48", 

"60"]) 