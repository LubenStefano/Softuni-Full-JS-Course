function calculateDamage(value, entry, type) {
  let toLeftDamage = 0;
  let toRightDamage = 0;

    for (let i = 0; i < value.length; i++) {
        let item = value[i];
        if (i < entry) {
            if (type === "cheap" && item < value[entry]) {
                toLeftDamage += item;
            } else if (type === "expensive" && item >= value[entry]) {
                toLeftDamage += item;
            }
        } else if (i > entry) {
            if (type === "cheap" && item < value[entry]) {
                toRightDamage += item;
            } else if (type === "expensive" && item >= value[entry]) {
                toRightDamage += item;
            }
        }
    }
    if (toLeftDamage >= toRightDamage) {
        console.log(`Left - ${toLeftDamage}`);
    } else {
        console.log(`Right - ${toRightDamage}`);
    }
}
calculateDamage([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
