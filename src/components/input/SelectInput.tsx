import type { ChangeEvent } from "react";
import type { ValidationError } from "../../types/ValidationError";

type SelectInputProps = {
  id: string;
  label: string;
  value: string;
  options: string[];
  error: ValidationError;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({
  id,
  label,
  value,
  options,
  error,
  onChange,
}: SelectInputProps) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-field__input"
        id={id}
        value={value}
        onChange={onChange}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error.isError && (
        <p className="form-field__error">{error.errorMessage}</p>
      )}
    </div>
  );
}

export default SelectInput;
