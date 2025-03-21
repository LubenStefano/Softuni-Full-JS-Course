function login(input) {
  let username = input.shift();
  let pass = "";

  for (let i = username.length - 1; i >= 0; i--) {
    pass += username[i];
  }

  let guess = input.shift();
  let wrongCounter = 0;

  while (pass !== guess) {
    wrongCounter++;
    if (wrongCounter >= 4) {
      console.log(`User ${username} blocked!`);
      return;
    }
    console.log("Incorrect password. Try again.");
    guess = input.shift();
  }
  if (pass === guess) {
    console.log(`User ${username} logged in.`);
  }
}
login(["Aleks", "skella","skelA", "1234", "botka" ]);
