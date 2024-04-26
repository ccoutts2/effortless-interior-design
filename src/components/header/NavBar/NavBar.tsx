"use client";
import styles from "./NavBar.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import React, { useState } from "react";
import Link from "next/link";
import BurgerNav from "../BurgerNav/BurgerNav";
import ShopMenu from "../Shop/ShopMenu";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isShopActive, setIsShopActive] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className={styles.header}>
        {!isVisible && (
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
            </div>
            <div className={styles.desktopEl}>
              <div onMouseEnter={() => setIsShopActive(true)} className={styles.nav}>
                <Link href="/schemes"> schemes</Link>
              </div>
              <div
                onMouseEnter={() => setIsShopActive(false)}
                className={styles.nav}>
                <Link href="/workshops"> workshops</Link>
              </div>
              <div
                onMouseEnter={() => setIsShopActive(false)}
                className={styles.nav}>
                <Link className={``} href="/consultations">
                  {" "}
                  consultations
                </Link>
              </div>
            </div>
            <div onMouseEnter={() => setIsShopActive(false)} className={styles.logo}>
              <Link href="/">effortless interior design</Link>
            </div>
            <div
              onMouseEnter={() => setIsShopActive(false)}
              className={styles.desktopEl}>
              <div className={styles.nav}>
                <Link href="/resources"> resources</Link>
              </div>
              <div className={styles.nav}>
                <Link href="/about"> about</Link>
              </div>
              <div className={styles.nav}>
                <Link href="/contact"> contact</Link>
              </div>
            </div>
            <motion.div
              variants={opacity}
              animate={isActive ? "closed" : "open"}
              className={styles.shopContainer}>
              <FiShoppingCart />
              <IoIosSearch className={styles.searchLogo} onClick={toggleSearchBar} />
            </motion.div>
          </div>
        )}

        <SearchBar onClick={toggleSearchBar} isVisible={isVisible} />

        <AnimatePresence mode="wait">{isShopActive && <ShopMenu />}</AnimatePresence>
        <AnimatePresence mode="wait">{isActive && <BurgerNav />}</AnimatePresence>
      </nav>
      <div style={{ minHeight: "50px" }}></div>
    </>
  );
};

export default NavBar;
