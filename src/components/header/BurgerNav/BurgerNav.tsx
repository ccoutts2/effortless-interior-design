import styles from "./BurgerNav.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { height } from "./anim";
import React, { useState } from "react";
import ShopMenu from "../Shop/ShopMenu";
import Link from "next/link";

const BurgerNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.section
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
          schemes <span className={styles.plus}></span>
        </div>
        <AnimatePresence mode="wait">{isActive && <ShopMenu />}</AnimatePresence>
        <div className={styles.el}>
          <Link href="/about">workshops</Link>
        </div>
        <div className={styles.el}>
          <Link href="/about">consultations</Link>
        </div>
        <div className={styles.el}>
          <Link href="/about">resources</Link>
        </div>
        <div className={styles.el}>
          <Link href="/about">about</Link>
        </div>
        <div className={styles.el}>contact</div>
        <div className={styles.el}>
          <form className={styles.searchForm} id="search" name="search">
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search..."></input>
          </form>
        </div>
      </nav>
    </motion.section>
  );
};

export default BurgerNav;
