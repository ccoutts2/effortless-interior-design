"use client";
import styles from "./SchemeSlider.module.scss";
import room1 from "../../../public/assets/images/eid4.jpg";
import room2 from "../../../public/assets/images/eid10.jpg";
import room3 from "../../../public/assets/images/eid6.jpg";
import Image from "next/image";

const SchemeSlider = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.header}>what is an otp scheme</h2>
      <section>
        <div className={styles.sliderTop}>
          <div className={styles.imageContainer}>
            <Image
              width={500}
              height={500}
              className={styles.imageEl}
              src={room1.src}
              alt="slider"
            />
            <p>bathroom</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={500}
              height={500}
              className={styles.imageEl}
              src={room2.src}
              alt="slider"
            />
            <p>kitchen</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={500}
              height={500}
              className={styles.imageEl}
              src={room3.src}
              alt="slider"
            />
            <p>bedroom</p>
          </div>
        </div>
        <div className={styles.sliderBottom}>
          <div className={styles.videoContainer}>
            <video controls={false} autoPlay loop muted className={styles.video}>
              <source src="/assets/videos/test.mp4" type="video/mp4" />
            </video>
            <p>workshops</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={500}
              height={500}
              className={styles.imageEl}
              src={room3.src}
              alt="slider"
            />
            <p>bedroom</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchemeSlider;
