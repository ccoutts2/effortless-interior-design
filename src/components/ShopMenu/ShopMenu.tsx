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
        <p>bedroom</p>
        <p>bathroom</p>
        <p>kitchen</p>
        <p>living room</p>
      </div>
    </motion.main>
  );
};

export default ShopMenu;
