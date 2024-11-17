interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  value: string;
  placeholder?: string;
  className?: string;
}

export const Textarea = ({
  name,
  value,
  placeholder,
  className,
  ...defaultProps
}: TextAreaProps) => {
  return (
    <div className={`${className} w-full`}>
      <label htmlFor={name} className="hidden">
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder || name}
        className="mb-1 w-full border-b border-solid border-[#744442] bg-[#f3eee8] p-1 text-start text-sm placeholder-[#5d3a40] placeholder:text-sm placeholder:uppercase"
        {...defaultProps}
      ></textarea>
    </div>
  );
};
