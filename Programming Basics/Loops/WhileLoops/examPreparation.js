function examPreparation(input) {
  let index = 0;
  let maxFailGrades = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let grade = Number(input[index]);
  index++;

  let failCounter = 0;
  let allExerciseCounter = 0;
  let gradeSum = 0;
  let lastTaskName= "";

  while (command !== "Enough") {
    if (grade <= 4) {
      failCounter++;
    }
    gradeSum += grade;
    allExerciseCounter++;

    if (failCounter === maxFailGrades) {
      console.log(
        `You need a break, ${failCounter} poor grades.`);
      break;
    }
    lastTaskName = command;
    command = input[index];
    index++;
    grade = Number(input[index]);
    index++;
  }

  if (command === "Enough") {
    console.log(`Average score: ${(gradeSum / allExerciseCounter).toFixed(2)}`);
    console.log(`Number of problems: ${allExerciseCounter}`);
    console.log(`Last problem: ${input[index - 4]}`);
  }
}

examPreparation(["2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"])