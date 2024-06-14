"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavBar, SubNav, MobileNav, SearchBar } from "@/components";

export const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-[#f3eee8] md:sticky md:top-0 md:z-50">
      <NavBar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        setShowSubNav={setShowSubNav}
        setShowSearch={setShowSearch}
      />
      <AnimatePresence mode="wait">
        {showSubNav && <SubNav setIsShopActive={setShowSubNav} />}
      </AnimatePresence>
      <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />

      <AnimatePresence mode="wait">
        {showMobileNav && <MobileNav />}
      </AnimatePresence>
    </header>
  );
};
