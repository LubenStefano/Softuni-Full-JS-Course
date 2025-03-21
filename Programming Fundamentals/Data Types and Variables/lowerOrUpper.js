function lowerOrUpper(char) {
    let upperChar = char.toUpperCase()
    if(upperChar === char){
        console.log("upper-case");
    }else{
        console.log("lower-case");
    }
}
lowerOrUpper("L")