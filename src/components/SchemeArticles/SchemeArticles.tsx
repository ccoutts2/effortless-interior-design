import styles from "./SchemeArticles.module.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Scheme {
  title: string;
  src: string;
  srcHover: string;
  price: string;
}

interface SchemeProps {
  schemes: Scheme[];
}

const SchemeArticles: React.FC<SchemeProps> = ({ schemes }) => {
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };
  return (
    <section className={styles.products}>
      {schemes.map((scheme, index) => (
        <article
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          key={index}
          className={styles.schemes}>
          <Image
            width={500}
            height={500}
            src={index === isHover ? scheme.srcHover : scheme.src}
            alt="resources"
          />
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{scheme.title}</h3>
            <p className={styles.price}>{scheme.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default SchemeArticles;
