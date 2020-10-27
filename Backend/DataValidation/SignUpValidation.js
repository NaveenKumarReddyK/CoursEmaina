const dataValidator = require("validator");
const isEmpty = require("is-empty");

module.exports = function signupValidator(signupData) {
  const signupErrors = {};

  signupData.name = !isEmpty(signupData.name) ? signupData.name : "";
  signupData.email = !isEmpty(signupData.email) ? signupData.email : "";
  signupData.password = !isEmpty(signupData.password)
    ? signupData.password
    : "";
  signupData.confirmPassword = !isEmpty(signupData.confirmPassword)
    ? signupData.confirmPassword
    : "";

  if (isEmpty(signupData.name)) {
    signupErrors.name = "Name should not be empty";
  }

  if (isEmpty(signupData.email)) {
    signupErrors.email = "Email should not be empty";
  } else if (!dataValidator.isEmail(signupData.email)) {
    signupErrors.email = "Invalid email format";
  }

  if (isEmpty(signupData.password)) {
    signupErrors.password = "Password should not be empty";
  } else if (
    !dataValidator.isLength(signupData.password, { min: 6, max: 15 })
  ) {
    signupErrors.password = "Passwrod length should be in between 6 and 15";
  }

  if (isEmpty(signupData.confirmPassword)) {
    signupErrors.confirmPassword = "Password should not be empty";
  } else if (
    !dataValidator.equals(signupData.password, signupData.confirmPassword)
  ) {
    signupErrors.confirmPassword = "Passwords do not match";
  }

  return {
    signupErrors,
    isSignupDataValid: isEmpty(signupErrors),
  };
};
