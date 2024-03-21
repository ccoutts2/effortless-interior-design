import styles from "./ShopMenu.module.scss";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { height, translate, blur, opacity } from "./anim";
import Link from "next/link";
import ShopImages from "./ShopImages";

const ShopMenu = () => {
  interface SelectedLinkState {
    isActive: boolean;
    index: number;
  }

  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });

  type Links = { title: string; href: string; src: string }[];

  const links: Links = [
    {
      title: "bedroom",
      href: "/",
      src: "bathroom.jpg",
    },
    {
      title: "bathroom",
      href: "/",
      src: "bathroom.jpg",
    },
    {
      title: "kitchen",
      href: "/",
      src: "bathroom.jpg",
    },
    {
      title: "living room",
      href: "/",
      src: "bathroom.jpg",
    },
  ];

  const getChar = (word: string): JSX.Element[] => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, index) => {
      chars.push(
        <motion.span
          variants={translate}
          initial="initial"
          animate="enter"
          exit="closed"
          key={`c_${index}`}>
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <>
      <motion.main
        className={styles.nav}
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit">
        <div className={styles.wrapper}>
          {links.map((link, index) => {
            const { title, href } = link;
            return (
              <Link
                onMouseOver={() => setSelectedLink({ isActive: true, index })}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
                href={href}
                key={`l_${index}`}
                className={styles.el}>
                <motion.p
                  variants={blur}
                  initial="initial"
                  animate={
                    selectedLink.isActive && selectedLink.index !== index
                      ? "open"
                      : "closed"
                  }>
                  {getChar(title)}
                </motion.p>
              </Link>
            );
          })}
        </div>
      </motion.main>
      <ShopImages
        src={links[selectedLink.index].src}
        isActive={selectedLink.isActive}
      />
    </>
  );
};

export default ShopMenu;
