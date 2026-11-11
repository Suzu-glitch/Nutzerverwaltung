import type { ChangeEvent } from "react";
import type { ValidationError } from "../../types/ValidationError";

type DateInputProps = {
  id: string;
  label: string;
  value: string;
  error: ValidationError;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function DateInput({ id, label, value, error, onChange }: DateInputProps) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-field__input"
        id={id}
        type="date"
        value={value}
        onChange={onChange}
      />
      {error.isError && (
        <p className="form-field__error">{error.errorMessage}</p>
      )}
    </div>
  );
}

export default DateInput;
