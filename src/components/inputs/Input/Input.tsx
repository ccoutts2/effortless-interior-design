interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  className?: string;
}

export const Input = ({
  name,
  placeholder,
  type = "text",
  value,
  className,
  ...defaultProps
}: InputProps) => {
  return (
    <div className={`${className} w-full`}>
      <label htmlFor={name} className="hidden">
        {name}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder || name}
        className="mb-1 h-[auto] w-full border-b border-solid border-[#744442] bg-[#f3eee8] p-1 text-start text-sm placeholder-[#5d3a40] placeholder:uppercase"
        {...defaultProps}
      />
    </div>
  );
};
