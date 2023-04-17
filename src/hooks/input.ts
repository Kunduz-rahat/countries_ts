import { ChangeEvent, useState } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export function useInput(initialValue = ""): InputProps {
  const [value, setValue] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return {
    value,
    onChange,
  };
}
