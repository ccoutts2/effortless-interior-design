import type { Variants } from "framer-motion";

export const height: Variants = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
