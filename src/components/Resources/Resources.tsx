"use client";
import styles from "./Resources.module.scss";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";

const Resources = () => {
  const articles = [
    {
      src: "/assets/images/eid7.jpg",
      title: "key design lessons from lucy cunningham's...",
      href: "/",
      continue: "continue reading",
    },
    {
      src: "/assets/images/eid8.jpg",
      title: "english country-house style and the privelege of...",
      href: "/",
      continue: "continue reading",
    },
    {
      src: "/assets/images/eid11.jpg",
      title: "how to create a fabric scheme for your interior...",
      href: "/",
      continue: "continue reading",
    },
  ];
  return (
    <div className={styles.resources}>
      <h2 className={styles.header}>tips & resources</h2>
      <article className={styles.articles}>
        {articles.map((article, index) => (
          <div key={index} className={styles.article}>
            <Image width={500} height={500} src={article.src} alt="resources" />
            <h3 className={styles.title}>{article.title}</h3>
            <button className={styles.button}>{article.continue}</button>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Resources;
