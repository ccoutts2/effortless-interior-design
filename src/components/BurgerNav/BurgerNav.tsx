import styles from "./BurgerNav.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { height, opacity } from "./anim";
import React, { useState } from "react";
import ShopMenu from "../ShopMenu/ShopMenu";

const BurgerNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.main
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit">
      <nav className={styles.wrapper}>
        <div>home</div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.el} ${isActive ? styles.plusActive : ""}`}>
          shop <span className={styles.plus}></span>
        </div>
        <AnimatePresence mode="wait">{isActive && <ShopMenu />}</AnimatePresence>
        <div>workshops</div>
        <div>consultations</div>
        <div>resources</div>
        <div>about</div>
        <div>contact</div>
      </nav>
    </motion.main>
  );
};

export default BurgerNav;
