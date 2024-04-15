import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.header}>effortless interior design</h2>
      <div className={styles.footerContent}>
        <div className={styles.newsLetter}>
          <h3 className={styles.headings}>newsletter</h3>
          <form className={styles.form}>
            <input
              className={styles.input}
              placeholder="Enter your email address to subscribe"></input>
            <p>submit</p>
          </form>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.headings}>contact</h3>
          <p>tel: +44 8495 1561 </p>
          <p>email: blank@mail.com</p>
        </div>
        <nav className={styles.schemes}>
          <h3 className={styles.headings}>schemes</h3>
          <p>bedroom</p>
          <p>bathroom</p>
          <p>kitchen</p>
          <p>living room</p>
        </nav>
      </div>

      <section className={styles.copywrite}>
        <p>
          <span>&copy;</span>effortless interior design
        </p>
        <p>website by chris coutts</p>
      </section>
    </footer>
  );
};

export default Footer;
