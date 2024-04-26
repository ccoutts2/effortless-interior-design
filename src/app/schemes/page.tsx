"use client";
import styles from "./page.module.scss";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

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
  return (
    <>
      <section className={styles.header}>
        <h1>off the peg design schemes</h1>
        <p>
          <span>elevate</span> your rooms with{" "}
          <span>off the peg design schemes</span> tailored to you
        </p>
      </section>

      <FilterOverlay />

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default Schemes;
