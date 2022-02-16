// Import Engine
import Validator from "validator";

// Import Is Empty
import isEmpty from "../isEmpty.js";

export default function validateRegistrationInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Firstname field is required!";
  }

  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Lastname field is required!";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required!";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};