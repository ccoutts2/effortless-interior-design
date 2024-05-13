import styles from "./SearchBar.module.scss";
import React from "react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { container, item } from "./anim";

interface Props {
  isVisible: boolean;
  onClick: () => void;
}

const SearchBar: React.FC<Props> = ({ isVisible, onClick }) => {
  return (
    <motion.div
      className="flex w-full items-center justify-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.form
        className="w-[30%]"
        id="search"
        name="search"
        variants={item}
      >
        <input
          type="text"
          className={`${styles.searchBar} ${isVisible && styles.visible}`}
          placeholder="Search"
        ></input>
      </motion.form>
      {isVisible && (
        <motion.button
          className={`${styles.button} ${isVisible && styles.visible}`}
          onClick={onClick}
          variants={item}
        >
          <IoIosClose className="h-full" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default SearchBar;
