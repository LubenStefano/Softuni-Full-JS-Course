function timeToWalk(stepsToUni, footprintLengthMeters, speed){
    let distanceInMeters = stepsToUni * footprintLengthMeters;
    let speedInMetersPerSecond = speed / 3.6;
    let time = distanceInMeters / speedInMetersPerSecond;
    let rest = Math.floor(distanceInMeters / 500);
    let timeInMinutes = Math.floor((time / 60) + rest);
    let hours = Math.floor(timeInMinutes / 60);
    let minutes = (timeInMinutes % 60);
    let seconds = time % 60;
    console.log(`${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds.toFixed(0)}`);
}
timeToWalk(2564, 0.70, 5.5)