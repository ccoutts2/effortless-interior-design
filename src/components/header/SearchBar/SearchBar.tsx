import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { container, item } from "./anim";

interface SearchBarProps {
  showSearch: boolean;
  onClick: () => void;
}

const SearchBar = ({ showSearch, onClick }: SearchBarProps) => {
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
          className={`h-12 w-full border-b border-[#5d3a40] bg-[#f3eee8] ${showSearch ? "flex" : "hidden"}`}
          placeholder="Search"
        ></input>
      </motion.form>
      {showSearch && (
        <motion.button
          className="h-12 border-b border-[#5d3a40] bg-[#f3eee8]"
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
