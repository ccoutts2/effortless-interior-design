import styles from "./BurgerNav.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { height } from "./anim";
import { useState } from "react";
import ShopMenu from "../Shop/ShopMenu";
import Link from "next/link";
import BurgerNavMenuItem from "./BurgerNavMenuItem";

const BurgerNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.section
      className="truncate"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <nav className="relative mt-2 lg:flex">
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          home
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase ${isActive ? styles.plusActive : ""}`}
        >
          schemes <span className={styles.plus}></span>
        </div>
        <AnimatePresence mode="wait">
          {isActive && <ShopMenu />}
        </AnimatePresence>
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          <Link className="no-underline" href="/about">
            workshops
          </Link>
        </div>
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          <Link className="no-underline" href="/about">
            consultations
          </Link>
        </div>
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          <Link className="no-underline" href="/about">
            resources
          </Link>
        </div>
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          <Link className="no-underline" href="/about">
            about
          </Link>
        </div>
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          contact
        </div>
        <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
          <form id="search" name="search">
            <input
              type="text"
              className="w-full border-b border-solid  border-[#5d3a40] bg-[#f3eee8] text-left uppercase placeholder-[#5d3a40]"
              placeholder="Search..."
            ></input>
          </form>
        </div>
      </nav>
    </motion.section>
  );
};

export default BurgerNav;
