import styles from "./BurgerNav";
import { motion } from "framer-motion";
import { height } from "./anim";

const BurgerNav = () => {
  return (
    <motion.main variants={height} initial="initial" animate="enter" exit="exit">
      <div>home</div>
      <div>workshops</div>
      <div>consultations</div>
      <div>resources</div>
      <div>about</div>
      <div>contact</div>
    </motion.main>
  );
};

export default BurgerNav;
