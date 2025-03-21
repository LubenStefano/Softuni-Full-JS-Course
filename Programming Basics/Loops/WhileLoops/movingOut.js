function movingOut(input) {
  let index = 0;
  let a = Number(input[index]);
  index++;
  let b = Number(input[index]);
  index++;
  let c = Number(input[index]);
  index++;

  let space = a * b * c;

  let command = input[index];
  index++;
  allBoxes = 0;

  while (command !== "Done") {
    let boxes = Number(command);

    allBoxes += boxes;

    if (space < allBoxes) {
      break;
    }

    command = input[index];
    index++;
  }
  if (space < allBoxes) {
    console.log(
      "No more free space! You need " + (allBoxes - space) + " Cubic meters more."
    );
  } else {
    console.log(`${space - allBoxes} Cubic meters left.`);
  }
}
movingOut(["10", "1", "2", "4", "6", "Done"]);
