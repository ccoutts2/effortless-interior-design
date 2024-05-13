"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { BsFilterCircle } from "react-icons/bs";

const filterOptions = [
  {
    price: "Price",
    type: "Product Type",
    size: "Size",
  },
];

const FilterOverlay: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const filterItem = useRef<(HTMLDivElement | null)[]>([]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const tl = useRef<GSAPTimeline | null>();

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        gsap.set(filterItem.current, { y: 75 });

        tl.current = gsap
          .timeline({ paused: true, delay: 0.5 })
          .to(overlay.current, {
            duration: 1,
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            ease: "power4.inOut",
          });
      });

      return () => ctx.revert();
    },
    { scope: container },
  );

  useEffect(() => {
    if (isFilterOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isFilterOpen]);

  return (
    <section
      ref={container}
      className="flex items-stretch justify-start gap-2 px-4 py-8 capitalize md:px-12 md:py-8 lg:px-32"
    >
      <BsFilterCircle className="cursor-pointer" onClick={toggleFilter} />
      <p className="cursor-pointer">filter & sort</p>
      <div
        ref={overlay}
        className="z-2 fixed right-0 top-0 flex h-screen w-[60vw] bg-[#f3eee8] p-4 [clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)] md:w-[40vw]"
      >
        <div className="flex" onClick={toggleFilter}>
          <p className="cursor-pointer">&#x2715;</p>
        </div>

        <div className="flex flex-[4] flex-col items-stretch justify-stretch pt-8">
          <div>
            <div className="border-b border-solid border-black px-0 py-8">
              <h3 className="pt-16 font-normal">filter options & sort</h3>
            </div>
            {filterOptions.map((option, index) => (
              <div
                ref={(el) => (filterItem.current[index] = el)}
                key={index}
                className="w-max"
                style={{ clipPath: "polygon(0%_0%,100%_0,100%_100%,0%_100%)" }}
              >
                <div className="position">
                  <p className="text-base font-normal tracking-tight text-black md:text-4xl lg:text-5xl">
                    {option.price}
                  </p>
                  <p className="text-base font-normal tracking-tight text-black md:text-4xl lg:text-5xl">
                    {option.type}
                  </p>
                  <p className="text-base font-normal tracking-tight text-black md:text-4xl lg:text-5xl">
                    {option.size}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterOverlay;
