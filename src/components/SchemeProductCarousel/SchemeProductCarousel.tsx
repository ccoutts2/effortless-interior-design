"use client";

import styles from "./SchemeProductCarousel.module.scss";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type SchemeProductCarouselProps = {
  images: string[];
  interval?: number;
};

const SchemeProductCarousel = ({ images }: SchemeProductCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        {images.map((url, index) => (
          <Image
            width={2000}
            height={2000}
            key={url}
            src={url}
            alt="carousel"
            className={`${styles.image} ${
              index === imageIndex ? styles.active : ""
            }`}
            style={{
              transition: "opacity 1s ease-in-out",
              opacity: index === imageIndex ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div className={styles.sliderButtons}>
        {images.map((_, index) => (
          <button
            key={index}
            className={
              index === imageIndex ? styles.sliderButtonActive : styles.sliderButton
            }
            onClick={() => setImageIndex(index)}>
            <span aria-hidden="true"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SchemeProductCarousel;
