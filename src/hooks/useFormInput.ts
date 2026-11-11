import { useState, type ChangeEvent } from "react";
import type { ValidationError } from "../types/ValidationError";

const REQUIRED_ERROR_MESSAGE = "Bitte geben Sie einen Wert ein";

function useFormInput(initialValue: string, isRequired: boolean) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError>(() =>
    checkValue(initialValue),
  );

  function checkValue(currentValue: string): ValidationError {
    if (isRequired && currentValue.trim() === "") {
      return { isError: true, errorMessage: REQUIRED_ERROR_MESSAGE };
    }
    return { isError: false, errorMessage: "" };
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const newValue = event.target.value;
    setValue(newValue);
    setError(checkValue(newValue));
  }

  function validate(): boolean {
    const result = checkValue(value);
    setError(result);
    return !result.isError;
  }

  return { value, error, onChange: handleChange, validate };
}

export default useFormInput;
