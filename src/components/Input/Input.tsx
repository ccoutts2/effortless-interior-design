import Button from "../buttons/Button/Button";

interface InputProps {
  name: string;
  placeholder?: string;
}

const Input = ({ name, placeholder }: InputProps) => {
  return (
    <label className="hidden">
      {name}
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder || name}
        className="placeholder-uppercase mb-1 h-[auto] w-full border-b border-solid border-[#744442] bg-[#f3eee8] p-1 text-start text-sm uppercase placeholder-[#5d3a40]"
      />
    </label>
  );
};

export default Input;
