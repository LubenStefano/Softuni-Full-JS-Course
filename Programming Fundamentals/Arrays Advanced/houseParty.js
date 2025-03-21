function houseParty(guests) {
  let guestsList = [];
  for (const announce of guests) {
    let each = announce.split(" ");
    if (!each.includes("not")) {
      if (!guestsList.includes(each[0])) {
        guestsList.push(each[0]);
      } else {
        console.log(`${each[0]} is already in the list!`);
      }
    } else {
      if (guestsList.includes(each[0])) {
        let x = guestsList.indexOf(each[0]);
        guestsList.splice(x, 1);
      } else {
        console.log(`${each[0]} is not in the list!`);
      }
    }
  }
  console.log(guestsList.join("\n"));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
