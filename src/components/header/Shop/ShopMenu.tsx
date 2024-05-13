import { motion } from "framer-motion";
import { useState } from "react";
import { height, translate, blur } from "./anim";
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
      href: "/schemes/bedroom",
      src: "eid2.jpg",
    },
    {
      title: "bathroom",
      href: "/schemes/bathroom",
      src: "eid3.jpg",
    },
    {
      title: "kitchen",
      href: "/schemes/kitchen",
      src: "eid4.jpg",
    },
    {
      title: "living room",
      href: "/schemes/livingroom",
      src: "eid5.jpg",
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
          key={`c_${index}`}
        >
          {char}
        </motion.span>,
      );
    });

    return chars;
  };

  return (
    <>
      <motion.section
        className="overflow-hidden"
        variants={height}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="mx-1 lg:ml-24 lg:flex lg:w-[50%] lg:flex-wrap lg:justify-start lg:pt-8">
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
                className="relative block cursor-pointer px-0 py-2 text-xs uppercase no-underline"
              >
                <motion.p
                  className="mx-0 my-1 lg:mx-8 lg:my-8 lg:text-[2.6rem]"
                  variants={blur}
                  initial="initial"
                  animate={
                    selectedLink.isActive && selectedLink.index !== index
                      ? "open"
                      : "closed"
                  }
                >
                  {getChar(title)}
                </motion.p>
              </Link>
            );
          })}
        </div>
      </motion.section>
      <ShopImages
        src={links[selectedLink.index].src}
        isActive={selectedLink.isActive}
      />
    </>
  );
};

export default ShopMenu;
