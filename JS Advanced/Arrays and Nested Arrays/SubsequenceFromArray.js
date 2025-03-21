function extractNonDecreasingSubset(numbers) {
  let result = [];
  let currentBiggest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= currentBiggest) {
      result.push(numbers[i]);
      currentBiggest = numbers[i];
    }
  }

  return result;
}