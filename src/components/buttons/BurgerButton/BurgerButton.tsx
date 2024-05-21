import styles from "./BurgerButton.module.css";

interface BurgerButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const BurgerButton = ({
  isOpen,
  setIsOpen,
  className,
}: BurgerButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={`centered box-content h-5 w-5 cursor-pointer p-4 ${className ? className : ""}`}
    >
      <div className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`} />
    </button>
  );
};
