function walking(input){
    let index=0;
    let command = input[index];
    index++;

    let totalSteps = 0;

    while(totalSteps < 10000){
        
        if(command === "Going home"){
            totalSteps += Number(input[index]);
            break;
        }
        
        let steps = Number(command);
        totalSteps+= steps;
        
        command = input[index];
        index++;
    }
    let difference = 0;
  if (totalSteps >= 10000) {
    difference = totalSteps - 10000;
    console.log("Goal reached! Good job!");
    console.log(`${difference} steps over the goal!`);
  } else {
    difference = 10000 - totalSteps;
    console.log(`${difference} more steps to reach goal.`);
  }
}
walking(["125", "250", "4000", "30", "2678", "4682"])