function projectsCreation(input){
    let name = input[0];
    let project = Number(input[1]);
    let projectTime = project * 3;

    console.log(`The architect ${name} will need ${projectTime} hours to complete ${project} project/s.`)
}
projectsCreation(["George", "4"])