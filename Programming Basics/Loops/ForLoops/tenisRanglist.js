function tenisRanglist(input) {
    let index = 0;
    let totalTournaments = Number(input[0]);
    index++;
    let points = Number(input[index]);
    index++;
    let pointsFromTournament = 0;
    let wins = 0;

    for (i = 0; i < totalTournaments; i++) {
        let tournamentPoints = input[index];
        index++
        if (tournamentPoints === "W") {
            pointsFromTournament += 2000;
            wins++;
        } else if (tournamentPoints === "F") {
            pointsFromTournament += 1200;
        } else {
            pointsFromTournament += 720;
        }

    }
    console.log("Final points: " + (points + pointsFromTournament))
    console.log("Average points: " + Math.floor(pointsFromTournament / totalTournaments))
    console.log((wins / totalTournaments * 100).toFixed(2) + "%")
}
tenisRanglist(["4",

    "750",

    "SF",

    "W",

    "SF",

    "W"])