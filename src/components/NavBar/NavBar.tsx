"use client";
import styles from "./NavBar.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import React, { useState } from "react";
import Link from "next/link";
import BurgerNav from "../BurgerNav/BurgerNav";
import ShopMenu from "../ShopMenu/ShopMenu";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isShopActive, setIsShopActive] = useState<boolean>(false);

  return (
    <main className={styles.header}>
      <div className={styles.bar}>
        <div
          onMouseDown={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}></div>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              menu
            </motion.p>
            <motion.p variants={opacity} animate={!isActive ? "closed" : "open"}>
              close
            </motion.p>
          </div>
        </div>
        <div className={styles.desktopEl}>
          <div onMouseEnter={() => setIsShopActive(true)} className={styles.nav}>
            shop
          </div>
          <div onMouseEnter={() => setIsShopActive(false)} className={styles.nav}>
            workshops
          </div>
          <div onMouseEnter={() => setIsShopActive(false)} className={styles.nav}>
            consultations
          </div>
        </div>
        <div onMouseEnter={() => setIsShopActive(false)} className={styles.logo}>
          <Link href="/">effortless interior design</Link>
        </div>
        <div className={styles.desktopEl}>
          <div onMouseEnter={() => setIsShopActive(false)} className={styles.nav}>
            resources
          </div>
          <div onMouseEnter={() => setIsShopActive(false)} className={styles.nav}>
            about
          </div>
          <div onMouseEnter={() => setIsShopActive(false)} className={styles.nav}>
            contact
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={isActive ? "closed" : "open"}
          className={styles.shopContainer}>
          <FiShoppingCart />
          <IoIosSearch />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isShopActive && <ShopMenu />}</AnimatePresence>
      <AnimatePresence mode="wait">{isActive && <BurgerNav />}</AnimatePresence>
    </main>
  );
};

export default NavBar;
