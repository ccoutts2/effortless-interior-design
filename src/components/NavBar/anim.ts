import type { Variants } from "framer-motion";

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
