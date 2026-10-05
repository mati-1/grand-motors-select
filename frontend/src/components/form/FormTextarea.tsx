import type { TextareaHTMLAttributes } from "react";

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export const FormTextarea = ({ label, id, ...props }: FormTextareaProps) => {
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

      <textarea
        id={id}
        {...props}
        className="
          min-h-28
          w-full
          resize-none
          rounded-[10px]
          border
          border-white/10
          bg-[ext-[#E8E9E7]/2.5
          px-4
          py-3
          text-[12px]
          leading-[1.7]
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
