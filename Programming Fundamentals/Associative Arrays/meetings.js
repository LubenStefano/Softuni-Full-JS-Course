function meetings(arr) {
    let appointments = {};
    for (let info of arr) {
      [day, name] = info.split(" ");
      if (!(day in appointments)) {
        appointments[day] = name;
        console.log(`Scheduled for ${day}`);
      } else {
        console.log(`Conflict on ${day}!`);
      }
    }
    let entries = Object.entries(appointments);
    for (const [day, name] of entries) {
      console.log(`${day} -> ${name}`);
    }
  }
meetings([
  "Friday Bob",

  "Saturday Ted",

  "Monday Bill",

  "Monday John",

  "Wednesday George",
]);
