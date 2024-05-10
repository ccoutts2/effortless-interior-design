"use client";
import React, { useState } from "react";
import styles from "./bathroom1.module.scss";
import SchemeProductCarousel from "@/components/SchemeProductCarousel/SchemeProductCarousel";
import room1 from "../../../../../public/assets/images/eid2.jpg";
import room2 from "../../../../../public/assets/images/eid5.jpg";
import room3 from "../../../../../public/assets/images/eid11.jpg";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";

const Bathroom1: React.FC = () => {
  const images = [room1, room2, room3].map((image) => image.src);

  const [quantity, setQuantity] = useState<number>(1);

  const countUp = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addQuantity = () => {
    countUp();
  };

  const subtractQuantity = () => {
    countDown();
  };

  return (
    <section className={styles.productPage}>
      <div>
        <p>paper trail placeholder for the time being</p>
      </div>
      <div className={styles.imageContainer}>
        <SchemeProductCarousel images={images} />
      </div>
      <div className={styles.description}>
        <h2>linen frill bathmat, sky blue</h2>
        <h3>
          handwoven, this bahmat is a classic bathroom essential done the holly lomax
          way.
        </h3>
      </div>
      <article className={styles.categories}>
        <p>£1000</p>
        <p>details</p>
        <p>fabric prices</p>
        <p>get holly's help</p>
      </article>
      <div className={styles.quantity}>
        <div className={styles.quantityBox}>
          <button className={styles.button} onClick={subtractQuantity}>
            <GrSubtract />
          </button>
          <div>{quantity}</div>
          <button className={styles.button} onClick={addQuantity}>
            <GrAdd />
          </button>
        </div>
      </div>
      <div className={styles.payContainer}>
        <button className={styles.button}>pay with stripe</button>
      </div>
    </section>
  );
};

export default Bathroom1;
