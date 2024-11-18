"use client";
import styles from "./Accordion.module.css";
import { ReactElement, useEffect, useRef } from "react";
import { AccordionTitle } from "./AccordionTitle";

export interface AccordionItemProps {
  isActive: boolean;
  onClick: () => void;
  title: string;
  content: string | ReactElement;
}

export const AccordionItem = ({
  isActive = true,
  content,
  title,
  onClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  function handleOpen(el: HTMLDivElement) {
    if (isActive) {
      el.style.maxHeight = `${el.scrollHeight}px`;
    } else {
      el.style.maxHeight = "0px";
    }
  }
  useEffect(() => {
    const el = contentRef.current as HTMLDivElement;
    handleOpen(el);
  }, [isActive]);

  return (
    <div className={styles.AccordionItem}>
      <AccordionTitle title={title} onClick={onClick} isActive={isActive} />
      <section
        className={styles.AccordionItem__Section}
        ref={contentRef}
        {...(isActive && { "data-is-open": true })}
      >
        <p>{content}</p>
      </section>
    </div>
  );
};
export default AccordionItem;
