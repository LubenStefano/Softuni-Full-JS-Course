function deckCards(arr) {
  function createCard(face, suit) {
    const validFaces = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    if (!validFaces.includes(face)) {
      return "error";
    }
    let theSuit = "";
    switch (suit) {
      case "S":
        theSuit = `\u2660`;
        break;
      case "H":
        theSuit = `\u2665`;
        break;
      case "D":
        theSuit = `\u2666`;
        break;
      case "C":
        theSuit = `\u2663`;
        break;
    }
    return `${face}${theSuit}`;
  }
  let result = [];
  for (let line of arr) {
    let suit = line.slice(line.length - 1);
    let face = line.slice(0, line.length - 1);

    let card = createCard(face, suit);
    if (card === "error") {
      console.log(`Invalid card: ${face}${suit}`);
      break;
    }
    result.push(card);
  }
  console.log(result.join(" "));
}
deckCards(["2S", "10D", "KH", "2C"]);
