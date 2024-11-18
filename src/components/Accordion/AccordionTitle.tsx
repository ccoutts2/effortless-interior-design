import styles from "./Accordion.module.css";
import { PlusMinusButton } from "../buttons/PlusMinusButton/PlusMinusButton";

export interface AccordionTitle {
  title: string;
  onClick: () => void;
  isActive?: boolean | undefined;
}

export const AccordionTitle = ({
  title,
  onClick,
  isActive,
}: AccordionTitle) => {
  return (
    <h3 className={styles.AccordionTitle}>
      <span>{title}</span>
      <PlusMinusButton isActive={isActive} onClick={onClick} />
    </h3>
  );
};
