function firstAndLastKnumbers(input) {
  let k = input.shift();
  let firstK = input.slice(0, k); // взима първите k елемента от input
  let lastK = input.slice(input.length - k); // взима последните k елемента от input, input.length - k е индекса от който започваме да взимаме
  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}
// firstAndLastKnumbers([2, 7, 8, 9]);
firstAndLastKnumbers([3, 6, 7, 8, 9]);
