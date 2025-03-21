function basketballTournaments(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalMatches = 0;
    let wins = 0;
    let losses = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        let numberOfMatches = Number(input[index]);
        index++;

        for (let i = 1; i <= numberOfMatches; i++) {
            totalMatches++;
            let desiPoints = Number(input[index]);
            index++;
            let opponentPoints = Number(input[index]);
            index++;

            if (desiPoints > opponentPoints) {
                wins++;
                console.log(
                    `Game ${i} of tournament ${tournamentName}: win with ${desiPoints - opponentPoints
                    } points.`
                );
            } else {
                losses++;
                console.log(
                    `Game ${i} of tournament ${tournamentName}: lost with ${opponentPoints - desiPoints
                    } points.`
                );
            }
        }
        command = input[index];
        index++;
    }

    let winPercentage = (wins / totalMatches) * 100;
    let lossPercentage = (losses / totalMatches) * 100;

    console.log(`${winPercentage.toFixed(2)}% matches win`);
    console.log(`${lossPercentage.toFixed(2)}% matches lost`);
}

basketballTournaments([
    "Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments",
]);
