"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { height, blur } from "./anim";
import Link from "next/link";

interface SubNavProps {
  setIsShopActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubNav = ({ setIsShopActive }: SubNavProps) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const links = [
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

  return (
    <motion.div
      className="overflow-hidden"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseLeave={() => {
        setIsShopActive(false);
      }}
    >
      <div className="px-4 lg:ml-24 lg:flex lg:w-[50%] lg:flex-wrap lg:justify-start lg:pt-8">
        {links.map(({ title, href }, index) => {
          return (
            <Link
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              href={href}
              key={`l_${index}`}
              className="relative block py-2 text-sm uppercase"
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
                {title}
              </motion.p>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};
