"use client";
import styles from "./OurStory.module.scss";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const OurStory = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });

  return (
    <div className={styles.bio}>
      <h2 className={styles.header}>our story</h2>
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

export default OurStory;
