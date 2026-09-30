import type { InputHTMLAttributes } from "react";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const FormInput = ({ label, id, ...props }: FormInputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="
          mb-1.5
          block
          text-[10px]
          text-white/45
        "
      >
        {label}
      </label>

      <input
        id={id}
        {...props}
        className="
          h-11
          w-full
          rounded-[10px]
          border
          border-white/10
          bg-white/2.5
          px-4
          text-[12px]
          text-white
          outline-none
          placeholder:text-white/20
          transition-all
          duration-300
          focus:border-[#b99a5c]/50
          focus:bg-white/[0.035]
        "
      />
    </div>
  );
};
