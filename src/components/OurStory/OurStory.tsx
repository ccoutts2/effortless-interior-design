"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const OurStory = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });

  return (
    <div className="p-4 pt-8 md:px-12 xl:px-32">
      <h2 className="text-center text-xs capitalize italic">our story</h2>
      <motion.p
        ref={element}
        className="pt-4"
        style={{ opacity: scrollYProgress }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sequi ad
        cumque, aliquid, temporibus maxime culpa nisi similique obcaecati
        praesentium, deleniti laboriosam voluptas sed facere! Accusantium
        voluptate laborum deserunt commodi.
      </motion.p>
    </div>
  );
};

export default OurStory;
