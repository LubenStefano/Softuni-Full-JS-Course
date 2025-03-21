function cardGame(arr){
let cardPoints = {}
for (let line of arr) {
    let [name, cards] = line.split(": ")
    cards = cards.split(", ")
    if (!cardPoints.hasOwnProperty(name)) {
        cardPoints[name] = cards
    } else {
        cardPoints[name] = cardPoints[name].concat(cards)
    }
    cardPoints[name] = cardPoints[name].filter((x, i, a) => a.indexOf(x) === i)
}
let entries = Object.entries(cardPoints)
for (let [name, cards] of entries) {
    let totalPoints = 0
    for (let card of cards) {
        let type = card[card.length - 1]
        let power = card.substring(0, card.length - 1)
        if (power === "J") {
            power = 11
        } else if (power === "Q") {
            power = 12
        } else if (power === "K") {
            power = 13
        } else if (power === "A") {
            power = 14
        }
        if (type === "S") {
            type = 4
        } else if (type === "H") {
            type = 3
        } else if (type === "D") {
            type = 2
        } else if (type === "C") {
            type = 1
        }
        totalPoints += power * type
    }
    console.log(`${name}: ${totalPoints}`);
}
}
cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])