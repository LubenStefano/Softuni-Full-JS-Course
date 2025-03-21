function listProcessor(arr){
let result = []
for(let line of arr){
    let [command, word] = line.split(" ")
            switch (command) {
            case "add":
            result.push(word)
            break;
            case "remove":
            for (let currWord of result) {
                if(currWord === word){
                    result.splice(result.indexOf(currWord), 1);
                }
            }
            break;
            case "print":
            console.log(result.join(","));
            break
        }
}
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])