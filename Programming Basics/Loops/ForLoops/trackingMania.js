function trackingMania(input) {
    let index = 0;
    let groupsCount = Number(input[index]);
    index++;

    let groupMembersCount = 0;
    let allPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 0; i < groupsCount; i++) {
        groupMembersCount = Number(input[index]);
        index++;
        if (groupMembersCount <= 5) {
            musala += groupMembersCount;
        } else if (groupMembersCount >= 6 && groupMembersCount <= 12) {
            monblan += groupMembersCount;
        } else if (groupMembersCount >= 13 && groupMembersCount <= 25) {
            kilimandjaro += groupMembersCount;
        } else if (groupMembersCount >= 26 && groupMembersCount <= 40) {
            k2 += groupMembersCount;
        } else {
            everest += groupMembersCount;
        }
        allPeople += groupMembersCount;
    }

    console.log((musala / allPeople * 100).toFixed(2) + "%")
    console.log((monblan / allPeople * 100).toFixed(2) + "%")
    console.log((kilimandjaro / allPeople * 100).toFixed(2) + "%")
    console.log((k2 / allPeople * 100).toFixed(2) + "%" )  
    console.log((everest / allPeople * 100).toFixed(2) + "%")         
}
trackingMania(["5",

"25",

"41",

"31",

"250",

"6"])