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
          text-white/45
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
          bg-white/2.5
          px-4
          py-3
          text-[12px]
          leading-[1.7]
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
