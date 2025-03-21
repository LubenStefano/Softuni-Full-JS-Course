function maxSequenceOfEqualElements(arr) {
  let maxStreak = [];
  let currentStreak = [];

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    if (currentStreak.length === 0 || currentStreak[0] === currNum) {
      currentStreak.push(currNum);
    } else {
      if (currentStreak.length > maxStreak.length) {
        maxStreak = currentStreak.slice(); // copy current streak to max streak
      }
      currentStreak = [currNum];
    }
  }

  if (currentStreak.length > maxStreak.length) {
    maxStreak = currentStreak; // update max streak if the last streak is the longest
  }

  console.log(maxStreak.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
