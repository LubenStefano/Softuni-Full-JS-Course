function addressBook(arr) {
  let addressInfo = {};
  for (let info of arr) {
    let [name, address] = info.split(":");
    addressInfo[name] = address;
  }
  let entries = Object.entries(addressInfo).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (const [name, address] of entries) {
    console.log(`${name} -> ${address}`);
  }
}
addressBook([
  "Bob:Huxley Rd",

  "John:Milwaukee Crossing",

  "Peter:Fordem Ave",

  "Bob:Redwing Ave",

  "George:Mesta Crossing",

  "Ted:Gateway Way",

  "Bill:Gateway Way",

  "John:Grover Rd",

  "Peter:Huxley Rd",

  "Jeff:Gateway Way",

  "Jeff:Huxley Rd",
]);
