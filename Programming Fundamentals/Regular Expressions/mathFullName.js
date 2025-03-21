function matchFullName(names) {
  let validNames = [];
  names = names.split(', ');
  let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/
  for (let name of names) {
    if (pattern.test(name)) {
      validNames.push(name);
    }
  }
console.log(validNames.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")