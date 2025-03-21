function password(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let password = input[index];
    index++;
    let writtenPassword = input[index];
    index++;

    while (writtenPassword !== password) {
        writtenPassword = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`)

} 
password(["Gosho", "Secret","Secret"])