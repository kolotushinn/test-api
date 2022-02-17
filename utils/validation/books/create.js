// Import Engine
import Validator from "validator";

// Import Is Empty
import isEmpty from "../isEmpty.js";

export default function validateBookInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.author = !isEmpty(data.author) ? data.author : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required!";
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = "Author field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};