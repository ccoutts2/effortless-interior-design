"use client";
import React from "react";
import styles from "../page.module.scss";

import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "bathroom1",
    src: "/assets/images/eid6.jpg",
    srcHover: "/assets/images/eid4.jpg",
    price: "£1000000",
  },
  {
    title: "bathroom2",
    src: "/assets/images/eid13.jpg",
    srcHover: "/assets/images/eid1.jpg",
    price: "£1000000",
  },
  {
    title: "bathroom3",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid5.jpg",
    price: "£1000000",
  },
];

const BathroomScheme: React.FC = () => {
  return (
    <>
      <section className={styles.header}>
        <h1>bathroom schemes</h1>
        <p>
          <span>elevate</span> your bathroom with{" "}
          <span>off the peg design schemes</span> tailored to you
        </p>
      </section>
      <FilterOverlay />
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default BathroomScheme;
