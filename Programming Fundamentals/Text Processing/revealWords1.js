function replace(word, sentence){
let stars = '*'.repeat(word.length)
while(sentence.includes(stars)){
    sentence = sentence.replace(stars, word)
}
console.log(sentence)
}
replace('great','softuni is ***** place for learning new programming languages')