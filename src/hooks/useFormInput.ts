import { useState, type ChangeEvent } from "react";

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setValue(event.target.value);
  }

  return { value, onChange: handleChange };
}

export default useFormInput;
