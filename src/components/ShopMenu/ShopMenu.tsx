import styles from "./ShopMenu.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { height } from "./anim";

const ShopMenu = () => {
  return (
    <motion.main
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit">
      <div className={styles.wrapper}>
        <div className={styles.el}>bedroom</div>
        <div className={styles.el}>bathroom</div>
        <div className={styles.el}>kitchen</div>
        <div className={styles.el}>living room</div>
      </div>
    </motion.main>
  );
};

export default ShopMenu;
