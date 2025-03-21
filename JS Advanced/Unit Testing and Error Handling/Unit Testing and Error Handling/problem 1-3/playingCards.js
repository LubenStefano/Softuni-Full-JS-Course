function playingCards(face, suit){
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    if(!validFaces.includes(face)){
        throw new Error();
    }
    let theSuit = ''
    switch(suit){
        case "S":
            theSuit =`\u2660` 
        break;
        case "H":
            theSuit = `\u2665`
        break;
        case "D":
            theSuit = `\u2666`
        break;
        case "C":
            theSuit = `\u2663`
        break;
    }
    console.log(`${face}${theSuit}`);
}
playingCards('2', 'H');
