function constructionCrew(worker){
if(worker.dizziness === false){
    return worker
}
let requiredWater = 1/10 * worker.weight * worker.experience
worker.levelOfHydrated += requiredWater
worker.dizziness = false
return worker
}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })