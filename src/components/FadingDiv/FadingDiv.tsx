"use client";
import { ReactNode, useRef } from "react";
import { useScroll, motion } from "framer-motion";

interface FadingDivProps {
  children: ReactNode;
  className: string;
}

const FadingDiv = ({ children, className }: FadingDivProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });

  return (
    <motion.div
      ref={element}
      style={{ opacity: scrollYProgress }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default FadingDiv;
