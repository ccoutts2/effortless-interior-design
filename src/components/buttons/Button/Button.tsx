interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="mx-0 my-[0.75rem] h-auto w-auto bg-[#744442] px-[1.8rem] py-2 text-xs uppercase tracking-[1px] text-[#f3eee8]">
      {label}
    </button>
  );
};

export default Button;
