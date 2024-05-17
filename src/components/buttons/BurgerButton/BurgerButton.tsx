import styles from "./BurgerButton.module.css";

interface BurgerButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerButton = ({ isOpen, setIsOpen }: BurgerButtonProps) => {
  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="centered h-5 w-5 cursor-pointer gap-1 lg:hidden"
    >
      <div className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`} />
    </button>
  );
};

export default BurgerButton;
