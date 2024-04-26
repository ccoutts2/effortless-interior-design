"use client";
import React from "react";
import styles from "../page.module.scss";

import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "Bedroom1",
    src: "/assets/images/eid6.jpg",
    srcHover: "/assets/images/eid4.jpg",
    price: "£1000000",
  },
  {
    title: "Bedroom2",
    src: "/assets/images/eid13.jpg",
    srcHover: "/assets/images/eid1.jpg",
    price: "£1000000",
  },
  {
    title: "Bedroom3",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid5.jpg",
    price: "£1000000",
  },
];

const BedroomScheme: React.FC = () => {
  return (
    <>
      <section className={styles.header}>
        <h1>bedroom schemes</h1>
        <p>
          <span>elevate</span> your bedroom with{" "}
          <span>off the peg design schemes</span> tailored to you
        </p>
      </section>
      <FilterOverlay />

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default BedroomScheme;
