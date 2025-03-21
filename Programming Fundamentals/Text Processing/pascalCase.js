function pascalCase(string){
    let result = ""
for (let char of string) {
    if((/^[A-Z]+$/).test(char) && string.indexOf(char) !== 0){
       result += ", " + char
    }else{
        result += char
    }
   
}
console.log(result);
}
pascalCase('HoldTheDoor')