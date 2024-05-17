"use client";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";
import { useState } from "react";
import Link from "next/link";
import BurgerNav from "../BurgerNav/BurgerNav";
import ShopMenu from "../Shop/ShopMenu";
import SearchBar from "../SearchBar/SearchBar";
import Image from "next/image";
import BurgerButton from "@/components/buttons/BurgerButton/BurgerButton";
import BurgerNavLink from "../BurgerNav/BurgerNavLink";

import logo from "../../../../public/assets/logo/background.png";

const NavBar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isShopActive, setIsShopActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="w-full bg-[#f3eee8] md:sticky md:top-0 md:z-50">
      {!showSearch && (
        <div className="centered gap-8 uppercase">
          <div className="flex flex-1 lg:justify-end">
            <BurgerButton
              className="lg:hidden"
              isOpen={showBurgerMenu}
              setIsOpen={setShowBurgerMenu}
            />

            <div className="hidden gap-4 lg:flex">
              <BurgerNavLink
                href="schemes"
                onMouseEnter={() => setIsShopActive(true)}
              />
              <BurgerNavLink
                href="workshops"
                onMouseEnter={() => setIsShopActive(false)}
              />
              <BurgerNavLink
                href="consultations"
                onMouseEnter={() => setIsShopActive(false)}
              />
            </div>
          </div>

          <Link
            className="inline-block w-40"
            href="/"
            onMouseEnter={() => setIsShopActive(false)}
          >
            <Image
              className="h-full w-full object-cover"
              src={logo}
              alt="logo"
            />
          </Link>

          <div className="flex flex-1 justify-end lg:justify-between">
            <div className="hidden gap-4 lg:flex">
              <BurgerNavLink
                href="resources"
                onMouseEnter={() => setIsShopActive(false)}
              />
              <BurgerNavLink
                href="about"
                onMouseEnter={() => setIsShopActive(false)}
              />
              <BurgerNavLink
                href="contact"
                onMouseEnter={() => setIsShopActive(false)}
              />
            </div>

            <motion.div
              variants={opacity}
              animate={showBurgerMenu ? "closed" : "open"}
              className="flex cursor-pointer items-center"
            >
              <button className="p-4 lg:pr-2">
                <FiShoppingCart />
              </button>
              <button
                className="hidden p-4 pl-2 lg:flex"
                onClick={toggleSearchBar}
              >
                <IoIosSearch />
              </button>
            </motion.div>
          </div>
        </div>
      )}

      <SearchBar onClick={toggleSearchBar} showSearch={showSearch} />

      <AnimatePresence mode="wait">
        {isShopActive && <ShopMenu setIsShopActive={setIsShopActive} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showBurgerMenu && <BurgerNav />}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
