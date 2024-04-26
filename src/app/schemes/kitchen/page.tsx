"use client";
import React from "react";
import styles from "../page.module.scss";

import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "Kitchen1",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid6.jpg",
    price: "£1000000",
  },
  {
    title: "Kitchen2",
    src: "/assets/images/eid1.jpg",
    srcHover: "/assets/images/eid13.jpg",
    price: "£1000000",
  },
  {
    title: "Kitchen3",
    src: "/assets/images/eid2.jpg",
    srcHover: "/assets/images/eid3.jpg",
    price: "£1000000",
  },
];

const KitchenScheme: React.FC = () => {
  return (
    <>
      <section className={styles.header}>
        <h1>kitchen schemes</h1>
        <p>
          <span>elevate</span> your kitchen with{" "}
          <span>off the peg design schemes</span> tailored to you
        </p>
      </section>
      <FilterOverlay />

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default KitchenScheme;
