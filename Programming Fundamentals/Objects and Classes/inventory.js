function inventory(arr) {
    let heroes = [];
    for (let line of arr) {
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        items = items.split(", ")
        heroes.push({ name, level, items });
    }
    heroes
        .sort((a, b) => a.level - b.level)
        .forEach((hero) => {
        console.log(
            `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(
            ", "
            )}`
        );
        });
    }
inventory
([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
// ([

//     'Batman / 2 / Banana, Gun',
    
//     'Superman / 18 / Sword',
    
//     'Poppy / 28 / Sentinel, Antara'
    
//     ])
