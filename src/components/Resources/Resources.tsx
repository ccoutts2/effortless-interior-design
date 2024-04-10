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
      date: "27 august 2023",
      href: "/",
      continue: "continue reading",
    },
    {
      src: "/assets/images/eid8.jpg",
      title: "english country-house style and the privelege of...",
      date: "25 august 2023",
      href: "/",
      continue: "continue reading",
    },
    {
      src: "/assets/images/eid11.jpg",
      title: "how to create a fabric scheme for your interior...",
      date: "22 august 2023",
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
            <p className={styles.text}>{article.date}</p>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.text}>{article.continue}</p>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Resources;
