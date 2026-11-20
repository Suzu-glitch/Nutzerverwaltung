import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/ValidationError";
import type { Validator } from "./validators";

const NO_ERROR: ValidationError = { isError: false, errorMessage: "" };

function checkValue(value: string, validators: Validator[]): ValidationError {
  for (const validator of validators) {
    const errorMessage = validator(value);

    if (errorMessage) {
      return { isError: true, errorMessage };
    }
  }

  return NO_ERROR;
}

function useFormInput(initialValue: string, validators: Validator[] = []) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError>(NO_ERROR);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const newValue = event.target.value;
    setValue(newValue);
    setError(checkValue(newValue, validators));
  }

  function validate(): boolean {
    const result = checkValue(value, validators);
    setError(result);
    return !result.isError;
  }

  return { value, error, onChange: handleChange, validate };
}

export default useFormInput;
