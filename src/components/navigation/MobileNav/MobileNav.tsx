"use client";
import { motion } from "framer-motion";
import { height } from "./anim";
import { NavLink, NavExpandable } from "@/components";

export const MobileNav = () => {
  return (
    <motion.section
      className="truncate"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <nav className="relative flex flex-col px-4 pb-4 lg:hidden">
        <NavExpandable label="schemes" />
        <NavLink href="workshops" />
        <NavLink href="consultations" />
        <NavLink href="resources" />
        <NavLink href="about" />
        <NavLink href="contact" />
        <form
          className="w-full border-b border-[#5d3a40]"
          id="search"
          name="search"
        >
          <input
            type="text"
            className="w-full bg-[#f3eee8] py-2 text-left text-sm placeholder:text-sm placeholder:uppercase placeholder:text-inherit placeholder:opacity-60"
            placeholder="Search"
            autoFocus
          />
        </form>
      </nav>
    </motion.section>
  );
};
