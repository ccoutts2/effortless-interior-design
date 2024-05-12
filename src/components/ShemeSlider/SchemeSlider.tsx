"use client";
import room1 from "../../../public/assets/images/eid4.jpg";
import room2 from "../../../public/assets/images/eid10.jpg";
import room3 from "../../../public/assets/images/eid6.jpg";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { assetsConfig } from "@/config/assets";

const SchemeSlider = () => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    axis: "x",
    offset: ["end start", "start start"],
  });

  return (
    <section>
      <h2 className="p-4 pt-8 text-center text-xs font-normal capitalize italic md:px-12">
        what is an otp scheme
      </h2>
      <div>
        <div
          className="no-scrollbar flex h-72 gap-1 overflow-x-auto overflow-y-hidden p-4 pb-8 md:w-full md:justify-between md:px-12 lg:px-32"
          ref={containerRef}
        >
          <motion.div
            className="h-full w-[70%] flex-[0_0_auto] md:w-[30%]"
            ref={targetRef}
            style={{ opacity: scrollXProgress }}
          >
            <Image
              width={500}
              height={500}
              className="h-full w-full object-cover"
              src={room1.src}
              alt="slider"
            />
            <p>bathroom</p>
          </motion.div>
          <div className="h-full w-[70%] flex-[0_0_auto] md:w-[30%]">
            <Image
              width={500}
              height={500}
              className="h-full w-full object-cover"
              src={room2.src}
              alt="slider"
            />
            <p>kitchen</p>
          </div>
          <div className="h-full w-[70%] flex-[0_0_auto] md:w-[30%]">
            <Image
              width={500}
              height={500}
              className="h-full w-full object-cover"
              src={room3.src}
              alt="slider"
            />
            <p>bedroom</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 py-4 md:h-[25rem] md:w-full md:flex-row md:items-stretch md:px-12 lg:px-32">
          <div className="h-[50vh] w-full grow-[2] object-cover md:h-full">
            <video
              controls={false}
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            >
              <source
                src={assetsConfig.workshopsReelVideo.src}
                type="video/mp4"
              />
            </video>
            <p>workshops</p>
          </div>
          <div className="h-full w-full grow object-cover px-4 md:w-[44%] md:px-0">
            <Image
              width={500}
              height={500}
              className="h-full w-full object-cover"
              src={room3.src}
              alt="slider"
            />
            <p>bedroom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchemeSlider;
