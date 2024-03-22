import styles from "./BurgerNav.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { height, opacity } from "./anim";
import React, { useState } from "react";
import ShopMenu from "../Shop/ShopMenu";
import Link from "next/link";

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
        <div className={styles.el}>home</div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.el} ${isActive ? styles.plusActive : ""}`}>
          shop <span className={styles.plus}></span>
        </div>
        <AnimatePresence mode="wait">{isActive && <ShopMenu />}</AnimatePresence>
        <div className={styles.el}>workshops</div>
        <div className={styles.el}>consultations</div>
        <div className={styles.el}>resources</div>
        <div className={styles.el}>
          <Link href="/about">about</Link>
        </div>
        <div className={styles.el}>contact</div>
      </nav>
    </motion.main>
  );
};

export default BurgerNav;
