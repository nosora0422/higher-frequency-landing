import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

// Simplified Material 3 "filled" text field: a tinted box with a small
// label sitting above the value, matching the Figma "Text field" component.
export default function TextField({ label, id, ...inputProps }: TextFieldProps) {
  const fieldId = id ?? inputProps.name;
  return (
    <div className="flex w-full flex-col gap-[2px] rounded-[4px] border border-border-grey bg-paper px-[16px] py-[8px] transition-colors duration-200 focus-within:border-ink">
      <label htmlFor={fieldId} className="text-[11px] text-ash">
        {label}
      </label>
      <input
        id={fieldId}
        className="w-full bg-transparent text-[14px] text-ink placeholder:text-ash focus:outline-none"
        {...inputProps}
      />
    </div>
  );
}
