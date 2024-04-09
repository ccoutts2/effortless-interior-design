"use client";

import styles from "./ImageCarousel.module.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";

type ImageCarouselProps = {
  images: string[];
  interval?: number;
};

const ImageCarousel = ({ images, interval = 5000 }: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  useEffect(() => {
    const intervalImage = setInterval(showNextImage, interval);

    return () => clearInterval(intervalImage);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer}>
        {images.map((url, index) => (
          <img
            key={url}
            src={url}
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

export default ImageCarousel;
