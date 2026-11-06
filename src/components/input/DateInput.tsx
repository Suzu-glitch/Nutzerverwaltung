import type { ChangeEvent } from "react";

type DateInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function DateInput({ id, label, value, onChange }: DateInputProps) {
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
    </div>
  );
}

export default DateInput;
