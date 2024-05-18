"use client";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
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
    <header className="w-full bg-[#f3eee8] md:sticky md:top-0 md:z-50">
      <nav className="centered gap-8 uppercase">
        <div className="flex flex-1 lg:justify-end">
          <BurgerButton
            className="lg:hidden"
            isOpen={showBurgerMenu}
            setIsOpen={setShowBurgerMenu}
          />

          <div className="hidden gap-6 lg:flex">
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
          <Image className="h-full w-full object-cover" src={logo} alt="logo" />
        </Link>

        <div className="flex flex-1 justify-end lg:justify-between">
          <div className="hidden gap-6 lg:flex">
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

          <div className="flex items-center">
            <button className="p-4 lg:pb-[1.125rem] lg:pr-2 lg:pt-[.875rem]">
              <FiShoppingCart />
            </button>
            <button
              className="hidden pb-[1.125rem] pl-2 pr-4 pt-[.875rem] lg:flex"
              onClick={toggleSearchBar}
            >
              <IoIosSearch />
            </button>
          </div>
        </div>
      </nav>

      <SearchBar
        onClick={toggleSearchBar}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      <AnimatePresence mode="wait">
        {isShopActive && <ShopMenu setIsShopActive={setIsShopActive} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showBurgerMenu && <BurgerNav />}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
