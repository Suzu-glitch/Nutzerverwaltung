import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/ValidationError";

const REQUIRED_ERROR_MESSAGE = "Bitte geben Sie einen Wert ein";
const NO_ERROR: ValidationError = { isError: false, errorMessage: "" };

function checkValue(value: string, isRequired: boolean): ValidationError {
  if (isRequired && value.trim() === "") {
    return { isError: true, errorMessage: REQUIRED_ERROR_MESSAGE };
  }

  return NO_ERROR;
}

function useFormInput(initialValue: string, isRequired: boolean) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError>(NO_ERROR);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const newValue = event.target.value;
    setValue(newValue);
    setError(checkValue(newValue, isRequired));
  }

  function validate(): boolean {
    const result = checkValue(value, isRequired);
    setError(result);
    return !result.isError;
  }

  return { value, error, onChange: handleChange, validate };
}

export default useFormInput;
