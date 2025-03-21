 
function shopping(input){
    let budget = Number(input[0]);
    let nGpu = Number(input[1]);
    let nCpu = Number(input[2]);
    let nRam = Number(input[3]);
     
    let gpu = 250 * nGpu;
    let oneCpu = nCpu * (gpu * 35/100);
    let oneRam = nRam * (gpu * 10/100);
    
    let finalBudget = gpu + oneCpu + oneRam;

    if(nGpu > nCpu){
        let discount = finalBudget * 15/100;
        finalBudget = finalBudget - discount;
    }
    if(budget >= finalBudget){
        console.log(`You have ${(budget - finalBudget).toFixed(2)} leva left!`)
    }else {
        console.log(`Not enough money! You need ${(finalBudget - budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45", "3", 

"1", 

"1"]) 