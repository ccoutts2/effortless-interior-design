"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ShopMenu from "../Shop/ShopMenu";
import PlusMinusButton from "@/components/buttons/PlusMinusButton/PlusMinusButton";

interface BurgerNavExpandableProps {
  label: string;
}

const BurgerNavExpandable = ({ label }: BurgerNavExpandableProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="flex w-full justify-between py-2 text-xs uppercase"
      >
        {label}
        <PlusMinusButton isActive={showMenu} />
      </button>
      <AnimatePresence mode="wait">
        {showMenu && <ShopMenu setIsShopActive={setShowMenu} />}
      </AnimatePresence>
    </div>
  );
};
export default BurgerNavExpandable;
