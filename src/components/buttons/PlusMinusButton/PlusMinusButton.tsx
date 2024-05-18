import styles from "./PlusMinusButton.module.css";

interface PlusMinusButtonProps {
  isActive: boolean;
  onClick?: () => void;
}

export const PlusMinusButton = ({
  isActive,
  onClick,
}: PlusMinusButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.plus} ${isActive ? styles.minus : ""}`}
    />
  );
};
