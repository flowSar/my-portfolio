import type { ChangeEvent, ChangeEventHandler } from "react";

interface TextInputProps {
  label?: string;
  name: string;
  className?: string;
  placeholder?: string;
  type?: string;
  textInputType?: "input" | "textarea";
  rows?: number;
  value: string;
  onChangeInputValue?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextareaValue?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextInput({
  label,
  name,
  className,
  placeholder,
  type,
  textInputType = "input",
  rows = 1,
  value,
  onChangeInputValue,
  onChangeTextareaValue,
}: TextInputProps) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm text-primary dark:text-white' htmlFor={name}>
        {label}
      </label>
      {textInputType === "input" ? (
        <input
          value={value}
          onChange={onChangeInputValue}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className='py-3 px-4 focus:outline-none border dark:bg-dark-blue-100 border-gray-300 rounded-lg mt-2'
        />
      ) : (
        <textarea
          value={value}
          onChange={onChangeTextareaValue}
          id={name}
          name={name}
          placeholder={placeholder}
          className='py-3 px-4 focus:outline-none border dark:bg-dark-blue-100 border-gray-300 rounded-lg mt-2'
          rows={rows}
        ></textarea>
      )}
    </div>
  );
}

export default TextInput;
