import { motion } from "framer-motion";
import { opacity } from "./anim";
import Image from "next/image";

interface ShopImagesProps {
  src: string;
  isActive: boolean;
}

const ShopImages: React.FC<ShopImagesProps> = ({ src, isActive }) => {
  return (
    <motion.div
      className="absolute right-[25rem] top-24 hidden h-[13.5rem] w-48 lg:flex"
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
    >
      <Image
        src={`/assets/images/${src}`}
        fill={true}
        alt="room"
        className="object-cover"
      />
    </motion.div>
  );
};

export default ShopImages;
