function validate() {
  //elements
  const submitBtn = document.getElementById("submit");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmationPassword = document.getElementById("confirm-password");
  const isCompany = document.getElementById("company");
  let isChecked = false;
  const companyInfo = document.getElementById("companyInfo");
  const companyNumber = document.getElementById("companyNumber");
  const isValid = document.getElementById("valid");
  let valid = true;

  //validators
  function usernameValidation(username) {
    const pattern = /^[a-zA-Z0-9]{3,20}$/;
    if (pattern.test(username)) {
      return true;
    } else {
      return false;
    }
  }

  function emailValidation(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (pattern.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function passwordValidation(password) {
    const pattern = /^[a-zA-Z0-9_]{5,15}$/;
    if (pattern.test(password)) {
      return true;
    } else {
      return false;
    }
  }
  function passwordMatch(password, password2) {
    if (password === password2 && password.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  function companyNumberValidation(number) {
    if (number >= 1000 && number <= 9999) {
      return true;
    } else {
      return false;
    }
  }
  isCompany.addEventListener("change", () => {
    if (isCompany.checked === true) {
      companyInfo.style.display = "block";
      isChecked = true;
    } else {
      companyInfo.style.display = "none";
      isChecked = false
    }
  });
  //validating proccess
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    valid = true; // Reset valid flag to true at the beginning

    if (usernameValidation(username.value)) {
      username.style.border = "none";
      username.classList = ""
    } else {
      username.classList = "error"
      username.style.border= "solid 2px"
      username.style.borderColor = "red";
      valid = false;
    }
    if (emailValidation(email.value)) {
      email.classList = ""
      email.style.border = "none";
    } else {
      email.classList = "error"
      email.style.border= "solid 2px"
      email.style.borderColor = "red";
      valid = false;
    }
    if (passwordValidation(password.value) && passwordMatch(password.value, confirmationPassword.value)) {
      password.classList = ""
      password.style.border = "none";
    } else {
      password.classList = "error"
      password.style.border= "solid 2px"
      password.style.borderColor = "red";
      valid = false;
    }
    if (passwordMatch(password.value, confirmationPassword.value)) {
      confirmationPassword.classList = ""
      confirmationPassword.style.border = "none";
    } else {
      confirmationPassword.classList = "error"
      confirmationPassword.style.border= "solid 2px"
      confirmationPassword.style.borderColor = "red";
      valid = false;
    }

    if (isChecked) {
      if (companyNumberValidation(companyNumber.value)) {
        companyNumber.classList = ""
        companyNumber.style.border = "none";
      } else {
        companyNumber.classList = "error"
        companyNumber.style.border= "solid 2px"
        companyNumber.style.borderColor = "red";
        valid = false;
      }
    }

    if (valid === true) {
      isValid.style.display = "block";
    } else {
      isValid.style.display = "none";
    }
  });
}
