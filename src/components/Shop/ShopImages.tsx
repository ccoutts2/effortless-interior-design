import styles from "./ShopImages.module.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { opacity } from "./anim";
import Link from "next/link";
import Image from "next/image";

interface ShopImagesProps {
  src: string;
  isActive: boolean;
}

const ShopImages: React.FC<ShopImagesProps> = ({ src, isActive }) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}>
      <Image src={`/assets/images/${src}`} fill={true} alt="room" />
    </motion.div>
  );
};

export default ShopImages;
