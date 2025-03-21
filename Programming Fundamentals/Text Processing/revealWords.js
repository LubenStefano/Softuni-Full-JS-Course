function revealWords(words, sentence){
words = words.split(", ")
for (let word of words) {
    let censoredWord = "*".repeat(word.length)
    sentence = sentence.replace(censoredWord, word)
}
console.log(sentence);
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')