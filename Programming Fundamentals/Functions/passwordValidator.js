function passwordValidator(password) {
  let validLength = true;
  let onlyLettersAndDigits = true;
  let atLeastTwoDigits = true;

  if (!(password.length >= 6 && password.length <= 20)) {
    validLength = false;
    console.log("Password must be between 6 and 10 characters");
  }
  if (!/^[a-zA-Z0-9]+$/.test(password)) {     //създаваме patternt =>  /^[какво да има в него]+$/
    onlyLettersAndDigits = false;
    console.log("Password must consist only of letters and digits");
  }
  /*
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      count++;
    }
  } 
  */
  if (!/[0-9].*[0-9]/.test(password)) {
    atLeastTwoDigits = false;
    console.log("Password must have at least 2 digits");
  }
  if (validLength && onlyLettersAndDigits && atLeastTwoDigits) {
    console.log("Password is valid");
  }
}
passwordValidator("Pa$s$s");
