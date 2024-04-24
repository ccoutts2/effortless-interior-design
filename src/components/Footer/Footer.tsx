"use client";
import React, { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onFocus = () => {
    setIsActive(!isActive);
  };

  return (
    <footer className={styles.footer}>
      <h2 className={styles.header}>effortless interior design</h2>
      <div className={styles.footerContent}>
        <div className={styles.split}>
          <div className={styles.newsLetter}>
            <h3 className={styles.headings}>newsletter</h3>
            <form className={styles.form}>
              <input
                onFocus={onFocus}
                className={`${styles.input} ${isActive ? styles.inputActive : ""}`}
                placeholder="Enter your email address to subscribe"></input>
              <p className={styles.text}>submit</p>
            </form>
          </div>
          <div className={styles.contact}>
            <h3 className={styles.headings}>contact</h3>
            <p className={styles.text}>tel: +44 8495 1561 </p>
            <p className={styles.text}>email: blank@mail.com</p>
          </div>
        </div>
        <nav className={styles.schemes}>
          <h3 className={styles.headings}>schemes</h3>
          <p className={styles.text}>bedroom</p>
          <p className={styles.text}>bathroom</p>
          <p className={styles.text}>kitchen</p>
          <p className={styles.text}>living room</p>
        </nav>
      </div>

      <section className={styles.copywrite}>
        <p className={styles.text}>
          <span>&copy;</span>effortless interior design
        </p>
        <p className={styles.text}>website by chris coutts</p>
      </section>
    </footer>
  );
};

export default Footer;
