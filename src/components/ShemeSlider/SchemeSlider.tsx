"use client";
import styles from "./SchemeSlider.module.scss";
import room1 from "../../../public/assets/images/bathroom.jpg";
import room2 from "../../../public/assets/images/bathroom2.jpg";
import room3 from "../../../public/assets/images/bedroom-1.jpg";

const SchemeSlider = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.header}>what is an otp scheme</h2>
      <section>
        <div className={styles.sliderTop}>
          <div className={styles.imageContainer}>
            <img className={styles.imageEl} src={room1.src} />
            <p>bathroom</p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.imageEl} src={room2.src} />
            <p>kitchen</p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.imageEl} src={room3.src} />
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
            <img className={styles.imageEl} src={room3.src} />
            <p>bedroom</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchemeSlider;
