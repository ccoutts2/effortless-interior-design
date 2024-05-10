"use client";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Testimonials = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.7"],
  });

  return (
    <div className="p-4 pt-8 md:px-12 lg:px-32">
      <h2 className="text-center text-xs font-normal capitalize italic">
        testimonials
      </h2>
      <motion.div
        ref={element}
        style={{ opacity: scrollYProgress }}
        className="w-1/2 md:flex md:flex-col md:items-start md:justify-center"
      >
        <p className="pt-4 text-center text-sm capitalize italic md:text-left">
          a super workshop! well presented with concise instructions and
          ideas... my love for interiors has been reignited.
        </p>
        <p className="pt-4 text-center text-xs capitalize italic">
          mary, norfolk
        </p>
      </motion.div>
      <div className="w-full text-end md:flex md:items-end md:justify-end">
        <motion.div
          ref={element}
          style={{ opacity: scrollYProgress }}
          className="w-1/2 md:flex md:flex-col md:items-end md:justify-center"
        >
          <p className="pt-4 text-center text-sm capitalize italic md:text-right">
            the pace and content were exactly right. i feel inspired and will
            take your advice forward for all future projects.
          </p>
          <p className="pt-4 text-center text-xs capitalize italic">
            rosie, london
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
