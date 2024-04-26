"use client";
import React from "react";
import styles from "../page.module.scss";

import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";

import { BsFilterCircle } from "react-icons/bs";

const schemes = [
  {
    title: "Livingroom1",
    src: "/assets/images/eid8.jpg",
    srcHover: "/assets/images/eid9.jpg",
    price: "£1000000",
  },
  {
    title: "Livingroom2",
    src: "/assets/images/eid6.jpg",
    srcHover: "/assets/images/eid7.jpg",
    price: "£1000000",
  },
  {
    title: "Livingroom3",
    src: "/assets/images/eid3.jpg",
    srcHover: "/assets/images/eid4.jpg",
    price: "£1000000",
  },
];

const LivingroomScheme: React.FC = () => {
  return (
    <>
      <section className={styles.header}>
        <h1>livingroom schemes</h1>
        <p>
          <span>elevate</span> your livingroom with{" "}
          <span>off the peg design schemes</span> tailored to you
        </p>
      </section>
      <section className={styles.filter}>
        <BsFilterCircle />
        <p>filter & sort</p>
      </section>

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default LivingroomScheme;
