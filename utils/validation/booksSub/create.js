// Import Engine
import Validator from "validator";

// Import Is Empty
import isEmpty from "../isEmpty.js";

export default function validateBookSubInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required!";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};