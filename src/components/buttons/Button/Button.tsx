interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="mx-0 my-[0.75rem] h-auto w-auto bg-[#744442] px-[1.8rem] py-2 text-xs uppercase tracking-[1px] text-[#f3eee8]"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
