"use client";
import React from "react";
import styles from "./page.module.scss";

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
      <section className={styles.filter}>
        <BsFilterCircle />
        <p>filter & sort</p>
      </section>

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default Schemes;
