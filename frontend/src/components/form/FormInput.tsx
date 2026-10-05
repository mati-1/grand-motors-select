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
          text-[#E8E9E7]/45
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
          bg-[ext-[#E8E9E7]/2.5
          px-4
          text-[12px]
          text-[#E8E9E7]
          outline-none
          placeholder:text-[#E8E9E7]/20
          transition-all
          duration-300
          focus:border-[#4C9FE5]/50
          focus:bg-[ext-[#E8E9E7]/[0.035]
        "
      />
    </div>
  );
};
