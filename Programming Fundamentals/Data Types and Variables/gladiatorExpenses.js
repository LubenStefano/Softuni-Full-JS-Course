function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let brokenHelmet = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let brokenArmor = null;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0) {
      brokenHelmet++;
    }
    if (i % 3 === 0) {
      brokenSword++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      brokenShield++;
      if (brokenShield % 2 === 0) {
        brokenArmor++;
      }
    }
  }

  let expensesHelmet = brokenHelmet * helmetPrice;
  let expensesSword = brokenSword * swordPrice;
  let expensesShield = brokenShield * shieldPrice;
  let expensesArmor = brokenArmor * armorPrice;
  let totalExpenses =
    expensesHelmet + expensesSword + expensesShield + expensesArmor;

  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(
  23,

  12.5,

  21.5,

  40,

  200
);
