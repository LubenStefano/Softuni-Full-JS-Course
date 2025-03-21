function trainTheTrainers(input) {
  let index = 0;
  let judgeN = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let totalMark = 0;
  let markCounter = 0;

  while (command !== "Finish") {
    let presentationName = command;
    let sumMark = 0;

    for (let i = 1; i <= judgeN; i++) {
      let mark = Number(input[index]);
      index++;

      sumMark += mark;
    }
    let avgMark = sumMark / judgeN;
    console.log(`${presentationName} - ${avgMark.toFixed(2)}.`);

    totalMark += avgMark;
    markCounter++;

    command = input[index];
    index++;
  }
  let averageTotalMarks = totalMark / markCounter;
  console.log(`Student's final assessment is ${averageTotalMarks.toFixed(2)}.`);
}
trainTheTrainers([
  "3",

  "Arrays",

  "4.53",

  "5.23",

  "5.00",

  "Lists",

  "5.83",

  "6.00",

  "5.42",

  "Finish",
]);
