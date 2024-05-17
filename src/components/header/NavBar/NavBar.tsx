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

import Logo from "../../../../public/assets/logo/background.png";

const NavBar = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isShopActive, setIsShopActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <nav className="fixed z-[2] w-full bg-[#f3eee8] p-4">
        {!showSearch && (
          <div className="flex items-center justify-between gap-2 uppercase">
            <BurgerButton
              isOpen={showBurgerMenu}
              setIsOpen={setShowBurgerMenu}
            />
            <div className="hidden lg:flex lg:px-12">
              <div onMouseEnter={() => setIsShopActive(true)} className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/schemes"
                >
                  schemes
                </Link>
              </div>
              <div onMouseEnter={() => setIsShopActive(false)} className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/workshops"
                >
                  workshops
                </Link>
              </div>
              <div onMouseEnter={() => setIsShopActive(false)} className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/consultations"
                >
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
                  resources
                </Link>
              </div>
              <div className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/about"
                >
                  about
                </Link>
              </div>
              <div className="px-8">
                <Link
                  className="text-[#5d3a40] no-underline lg:text-lg"
                  href="/contact"
                >
                  contact
                </Link>
              </div>
            </div>
            <motion.div
              variants={opacity}
              animate={showBurgerMenu ? "closed" : "open"}
              className="flex cursor-pointer items-center gap-8"
            >
              <FiShoppingCart />
              <IoIosSearch
                className="hidden lg:flex"
                onClick={toggleSearchBar}
              />
            </motion.div>
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
      <div style={{ minHeight: "50px" }}></div>
    </>
  );
};

export default NavBar;
