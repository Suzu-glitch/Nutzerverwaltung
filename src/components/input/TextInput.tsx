import type { ChangeEvent } from "react";

type TextInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({ id, label, value, onChange }: TextInputProps) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-field__input"
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
