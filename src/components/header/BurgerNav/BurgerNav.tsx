import { motion } from "framer-motion";
import { height } from "./anim";
import BurgerNavLink from "./BurgerNavLink";
import BurgerNavExpandable from "./BurgerNavExpandable";

const BurgerNav = () => {
  return (
    <motion.section
      className="truncate"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <nav className="relative mt-2 lg:flex">
        <BurgerNavLink label="home" href="" />
        <BurgerNavExpandable label="schemes" />
        <BurgerNavLink label="workshops" href="workshops" />
        <BurgerNavLink label="consultations" href="consultations" />
        <BurgerNavLink label="resources" href="resources" />
        <BurgerNavLink label="about" href="about" />
        <BurgerNavLink label="contact" href="contact" />
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
