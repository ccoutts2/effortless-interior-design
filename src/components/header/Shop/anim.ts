import type { Variants } from "framer-motion";

const transition = {
  duration: 1,
  ease: [0.76, 0, 0.24, 1],
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

export const translate: Variants = {
  initial: {
    y: "100%",
  },
  enter: {
    y: 0,
    transition: { ...transition, delay: 0.7 },
  },
  closed: {
    y: "100%",
    transition: { ...transition, delay: 0.2 },
  },
};

export const blur: Variants = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(2px)",
    opacity: 0.3,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
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
