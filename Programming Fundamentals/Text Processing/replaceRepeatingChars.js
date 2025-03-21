function replaceRepeatingChars(string){
    let result = ""
for (let index = 0; index < string.length; index++) {
    let currentChar = string[index]
    let nextChar = string[index - 1]
    if(currentChar !== nextChar){
        result += currentChar
    }
}
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')