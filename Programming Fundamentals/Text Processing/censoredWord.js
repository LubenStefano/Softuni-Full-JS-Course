function censoredWord(sentence, theWord){
while(sentence.includes(theWord)){
    sentence = sentence.replace(theWord, "*".repeat(theWord.length))
}
console.log(sentence);
}
censoredWord('A small sentence with some words', 'small')

function uncensoredWord(sentence, theWord) {
    while (sentence.includes("*".repeat(theWord.length))) {
        sentence = sentence.replace("*".repeat(theWord.length), theWord);
    }
    console.log(sentence);
}
uncensoredWord('A ***** sentence with some words', 'small');