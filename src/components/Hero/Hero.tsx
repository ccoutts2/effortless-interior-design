import styles from "./Hero.module.scss";
import room1 from "../../../public/assets/images/bathroom.jpg";
import room2 from "../../../public/assets/images/bathroom2.jpg";
import room3 from "../../../public/assets/images/bedroom-1.jpg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Hero = () => {
  const images = [room1, room2, room3].map((image) => image.src);

  return (
    <div className={styles.hero}>
      <ImageCarousel images={images} />
    </div>
  );
};

export default Hero;
