"use client";
import styles from "./Accordion.module.css";
import { useState, ReactElement } from "react";
import AccordionItem from "./AccordionItem";

export interface AccordionProps {
  items: {
    title: string;
    content: string | ReactElement;
  }[];
  defaultExpanded?: Number[];
  single?: boolean;
}

export const Accordion = ({
  items,
  defaultExpanded = [],
  single = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<Number[]>(defaultExpanded);

  function handleClick(i: Number) {
    if (single) {
      expanded.includes(i) ? setExpanded([]) : setExpanded([i]);
    } else {
      expanded.includes(i)
        ? setExpanded(expanded.filter((idx) => idx !== i))
        : setExpanded([...expanded, i]);
    }
  }
  return (
    <div className={styles.Accordion}>
      {items.map((item, i: Number) => (
        <AccordionItem
          key={`${i}`}
          {...item}
          isActive={expanded.includes(i) && true}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
};
