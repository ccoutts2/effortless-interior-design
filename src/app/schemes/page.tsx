"use client";
import styles from "./page.module.scss";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GSAPTimeline from "gsap";

import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";

import { BsFilterCircle } from "react-icons/bs";

const schemes = [
  {
    title: "yellow",
    src: "/assets/images/eid8.jpg",
    srcHover: "/assets/images/eid2.jpg",
    price: "£1000000",
  },
  {
    title: "blue",
    src: "/assets/images/eid9.jpg",
    srcHover: "/assets/images/eid1.jpg",
    price: "£1000000",
  },
  {
    title: "red",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid13.jpg",
    price: "£1000000",
  },
];

const filterOptions = [
  {
    price: "Price",
    type: "Product Type",
    size: "Size",
  },
];

const Schemes: React.FC = () => {
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
            x: 100,
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
          })
          .to(filterItem.current, {
            y: 0,
            duration: 1.25,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
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
    <>
      <section className={styles.header}>
        <h1>off the peg design schemes</h1>
        <p>
          <span>elevate</span> your rooms with{" "}
          <span>off the peg design schemes</span> tailored to you
        </p>
      </section>
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

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default Schemes;
