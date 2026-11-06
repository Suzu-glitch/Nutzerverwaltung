import type { ChangeEvent } from "react";

type SelectInputProps = {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({
  id,
  label,
  value,
  options,
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
    </div>
  );
}

export default SelectInput;
