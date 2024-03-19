"use client";
import styles from "./NavBar.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import React, { useState } from "react";
import Link from "next/link";
import BurgerNav from "../BurgerNav/BurgerNav";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <main className={styles.header}>
      <div className={styles.bar}>
        <div
          onMouseDown={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}>
          <div className={styles.burger}></div>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              menu
            </motion.p>
            <motion.p variants={opacity} animate={!isActive ? "closed" : "open"}>
              close
            </motion.p>
          </div>
        </div>
        <div className={styles.logo}>
          <h1>effortless interior design</h1>
        </div>
        <motion.div
          variants={opacity}
          animate={isActive ? "closed" : "open"}
          className={styles.shopContainer}>
          <FiShoppingCart />
          <IoIosSearch />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isActive && <BurgerNav />}</AnimatePresence>
    </main>
  );
};

export default NavBar;
