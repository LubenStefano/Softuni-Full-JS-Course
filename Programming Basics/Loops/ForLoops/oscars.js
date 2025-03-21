function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let nReviews = Number(input[index]);
    index++;

    for (let i = 0; i < nReviews; i++) {
        let reviewerName = input[index];
        index++;
        let reviewingPoints = Number(input[index]);
        index++;
        points += reviewerName.length * reviewingPoints / 2;
        if (points > 1250.5) {
            break;
        }
    }
    if (points > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
    }else{
        let pointsNeeded = 1250.5 - points;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])