"use client";
import styles from "./Testimonials.module.scss";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Testimonials = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });

  return (
    <div className={styles.bio}>
      <h2 className={styles.header}>testimonials</h2>
      <motion.div
        ref={element}
        style={{ opacity: scrollYProgress }}
        className={styles.leftContainer}>
        <p className={styles.text}>
          a super workshop! well presented with concise instructions and ideas... my
          love for interiors has been reignited.
        </p>
        <p className={styles.text}>mary, norfolk</p>
      </motion.div>
      <div className={styles.rightContainer}>
        <motion.div
          ref={element}
          style={{ opacity: scrollYProgress }}
          className={styles.rightContent}>
          <p className={styles.text}>
            the pace and content were exactly right. i feel inspired and will take
            your advice forward for all future projects.
          </p>
          <p className={styles.text}>rosie, london</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
