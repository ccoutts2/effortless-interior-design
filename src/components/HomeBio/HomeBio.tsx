"use client";
import styles from "./HomeBio.module.scss";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const HomeBio = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });
  return (
    <div className={styles.bio}>
      <h2 className={styles.header}>what is an off the peg design scheme?</h2>
      <motion.p
        ref={element}
        className={styles.text}
        style={{ opacity: scrollYProgress }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sequi ad
        cumque, aliquid, temporibus maxime culpa nisi similique obcaecati
        praesentium, deleniti laboriosam voluptas sed facere! Accusantium voluptate
        laborum deserunt commodi.
      </motion.p>
    </div>
  );
};

export default HomeBio;
