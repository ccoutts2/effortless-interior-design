"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PlusMinusButton, SubNav } from "@/components";

interface NavExpandableProps {
  label: string;
}

export const NavExpandable = ({ label }: NavExpandableProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="flex w-full cursor-pointer items-center justify-between py-2 text-sm uppercase lg:text-lg"
      >
        {label}
        <PlusMinusButton isActive={showMenu} />
      </div>
      <AnimatePresence mode="wait">
        {showMenu && <SubNav setIsShopActive={setShowMenu} />}
      </AnimatePresence>
    </>
  );
};
