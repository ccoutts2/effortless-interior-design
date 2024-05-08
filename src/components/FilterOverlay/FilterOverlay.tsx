"use client";
import styles from "./FilterOverlay.module.scss";
import React, { useState, useEffect, useRef } from "react";
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
    { scope: container }
  );

  useEffect(() => {
    if (isFilterOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isFilterOpen]);

  return (
    <section ref={container} className={styles.filter}>
      <BsFilterCircle onClick={toggleFilter} />
      <p>filter & sort</p>
      <div ref={overlay} className={styles.filterOverlay}>
        <div className={styles.filterOverlayMenu}>
          <div className={styles.close} onClick={toggleFilter}>
            <p>&#x2715;</p>
          </div>
        </div>

        <div className={styles.filterCopy}>
          <div className={styles.filterOptions}>
            <div className={styles.filterHeader}>
              <h3>filter options & sort</h3>
            </div>
            {filterOptions.map((option, index) => (
              <div
                ref={(el) => (filterItem.current[index] = el)}
                key={index}
                className={styles.filterItems}>
                <div className={styles.filterItemHolder}>
                  <p className={styles.filterItem}>{option.price}</p>
                  <p className={styles.filterItem}>{option.type}</p>
                  <p className={styles.filterItem}>{option.size}</p>
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
