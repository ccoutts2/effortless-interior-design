interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
}

const Textarea = ({ name, placeholder, ...defaultProps }: TextAreaProps) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="hidden">
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder || name}
        className="placeholder-text-sm mb-1 h-[auto] w-full border-b border-solid border-[#744442] bg-[#f3eee8] p-1 text-start text-sm placeholder-[#5d3a40] placeholder:uppercase"
        {...defaultProps}
      ></textarea>
    </div>
  );
};

export default Textarea;
