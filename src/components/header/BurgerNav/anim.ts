import type { Variants } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.76, 0, 0.24, 1],
};

export const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export const height: Variants = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};
