function cake(input) {
  let index = 0;
  let a = Number(input[index]);
  index++;
  let b = Number(input[index]);
  index++;

  let wholeCake = a * b;

  let command = input[index];
  index++;

  let cakePieces = 0;

  while (command !== "STOP") {
    let pieces = Number(command);

    cakePieces += pieces;

    if (wholeCake < cakePieces) {
      break;
    }
    command = input[index];
    index++;
  }
  if (wholeCake < cakePieces) {
    console.log(
      `No more cake left! You need ${cakePieces - wholeCake} pieces more.`
    );
  } else {
    console.log(`${wholeCake - cakePieces} pieces are left.`);
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
