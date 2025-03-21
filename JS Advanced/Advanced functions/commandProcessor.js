function solution() {
  let string = "";

  function append(newString) {
    return (string += newString);
  }

  function removeStart(n) {
    return (string = string.slice(n));
  }

  function removeEnd(n) {
    return (string = string.slice(0, string.length - n));
  }

  function print() {
    console.log(string);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
}
let firstZeroTest = solution();

firstZeroTest.append("hello");

firstZeroTest.append("again");

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();
