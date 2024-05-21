"use client";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { container, item } from "./anim";

interface SearchBarProps {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBar = ({ showSearch, setShowSearch }: SearchBarProps) => {
  return (
    showSearch && (
      <motion.div
        className="lg:centered absolute top-0 hidden h-full w-full bg-inherit"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.form
          className="flex w-[30%] border-b border-[#5d3a40] pl-8"
          id="search"
          name="search"
          variants={item}
        >
          <input
            type="text"
            className="flex h-12 w-full bg-[#f3eee8] text-sm placeholder:text-sm placeholder:uppercase placeholder:text-inherit placeholder:opacity-60"
            placeholder="Search"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Escape") setShowSearch(false);
            }}
          />
          <motion.button
            type="button"
            className="flex h-12 w-8 justify-end bg-[#f3eee8]"
            onClick={() => {
              setShowSearch(false);
            }}
            variants={item}
          >
            <IoIosClose className="h-full" />
          </motion.button>
        </motion.form>
      </motion.div>
    )
  );
};
