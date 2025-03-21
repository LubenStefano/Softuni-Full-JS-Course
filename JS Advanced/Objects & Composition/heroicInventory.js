function heroicInventory(arr){
let res = []
for (const heroInfo of arr) {
    if(heroInfo.trim() !== ""){
    let [name, level, ...items] = heroInfo.split(" / ")
    level = Number(level)
    if(items.length > 0){
        items = items[0].split(", ")
    }
    else{
        items = []
    }
    let hero = {
        name: name,
        level: level, 
        items: items
    }
    res.push(hero)
}
}
let jsonRes = JSON.stringify(res)
console.log(jsonRes);
}
heroicInventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest,DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
])
