function equalArrays(arr1, arr2) {
  let sum = 0;
  let ideantical = true;
  for (let i = 0; i < arr1.length; i++) {
    let num1 = Number(arr1[i]);
    let num2 = Number(arr2[i]);
    if (num1 === num2) {
      sum += num1;
    } else {
      ideantical = false;
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }
  if (ideantical) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1"], ["10"]);
