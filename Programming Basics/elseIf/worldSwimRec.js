function  worldSwimmingRecord(input){
    let rec = Number(input[0]);
    let meters = Number(input[1]);
    let SecForMeter = Number(input[2]);

    let personalRec = SecForMeter * meters;
    let personalRecWithWater = (Math.floor(meters/15 )*12.5) + personalRec;

    if(rec > personalRecWithWater){
        console.log(`Yes, he succeeded! The new world record is ${personalRecWithWater.toFixed(2)} seconds.`)
    }else{
        difference = personalRecWithWater - rec;
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67", 

"3017", 

"5.03"]) 