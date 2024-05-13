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
import Image from "next/image";

import Logo from "../../../../public/assets/logo/background.png";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isShopActive, setIsShopActive] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleSearchBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className="fixed z-[2] w-full bg-[#f3eee8] p-4">
        {!isVisible && (
          <div className="flex items-stretch justify-between gap-2 uppercase lg:items-center lg:justify-between">
            <div
              onMouseDown={() => {
                setIsActive(!isActive);
              }}
              className="flex cursor-pointer items-center justify-start gap-1"
            >
              <div
                className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
              ></div>
            </div>
            <div className="hidden lg:flex lg:px-12">
              <div onMouseEnter={() => setIsShopActive(true)} className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/schemes"
                >
                  {" "}
                  schemes
                </Link>
              </div>
              <div onMouseEnter={() => setIsShopActive(false)} className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/workshops"
                >
                  {" "}
                  workshops
                </Link>
              </div>
              <div onMouseEnter={() => setIsShopActive(false)} className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/consultations"
                >
                  {" "}
                  consultations
                </Link>
              </div>
            </div>
            <div onMouseEnter={() => setIsShopActive(false)} className="px-8">
              <Link className="text-[#5d3a40] no-underline lg:text-lg" href="/">
                <div className="h-[50%] w-[9rem]">
                  <Image
                    className="h-full w-full object-cover"
                    src={Logo}
                    alt="logo"
                  />
                </div>
              </Link>
            </div>
            <div
              onMouseEnter={() => setIsShopActive(false)}
              className="hidden lg:flex lg:px-12"
            >
              <div className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/resources"
                >
                  {" "}
                  resources
                </Link>
              </div>
              <div className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/about"
                >
                  {" "}
                  about
                </Link>
              </div>
              <div className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/contact"
                >
                  {" "}
                  contact
                </Link>
              </div>
            </div>
            <motion.div
              variants={opacity}
              animate={isActive ? "closed" : "open"}
              className="flex cursor-pointer items-center lg:relative lg:bottom-12"
            >
              <FiShoppingCart />
              <IoIosSearch
                className="hidden lg:flex"
                onClick={toggleSearchBar}
              />
            </motion.div>
          </div>
        )}

        <SearchBar onClick={toggleSearchBar} isVisible={isVisible} />

        <AnimatePresence mode="wait">
          {isShopActive && <ShopMenu />}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {isActive && <BurgerNav />}
        </AnimatePresence>
      </nav>
      <div style={{ minHeight: "50px" }}></div>
    </>
  );
};

export default NavBar;
