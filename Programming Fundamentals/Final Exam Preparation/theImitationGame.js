function theImitationGame(arr) {
  let message = arr.shift();
  let command = arr.shift();
  while (command !== "Decode") {
    let tokens = command.split("|");
    let action = tokens.shift();
    if (action === "Move") {
      let nLetters = Number(tokens.shift());
      let letters = message.substring(0, nLetters);
      message = message.replace(letters, "");
      message += letters;
    } else if (action === "Insert") {
      let [idx, value] = tokens;
      idx = Number(idx);
      message = message.substring(0, idx) + value + message.substring(idx);
    } else {
      let [substr, replace] = tokens;
      message = message.split(substr).join(replace);
    }
    command = arr.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
