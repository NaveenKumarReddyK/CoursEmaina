const dataValidator = require("validator");
const isEmpty = require('is-empty');

module.exports = function loginDataValidator(loginData) {
  const loginErrors = {};

  loginData.email = !isEmpty(loginData.email)
    ? loginData.email
    : "";
  loginData.password = !isEmpty(loginData.password)
    ? loginData.password
    : "";

  if (isEmpty(loginData.email)) {
    loginErrors.email = "Email should not be empty";
  } 
  else if (!dataValidator.isEmail(loginData.email)) {
    loginErrors.email = "Invalid email format";
  }

  if (isEmpty(loginData.password)) {
    loginErrors.password = "Password should not be empty";
  }

  return {
    loginErrors,
    isValidLogin: isEmpty(loginErrors),
  };
};



