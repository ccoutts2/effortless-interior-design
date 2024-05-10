import room1 from "../../../public/assets/images/eid2.jpg";
import room2 from "../../../public/assets/images/eid3.jpg";
import room3 from "../../../public/assets/images/eid15.jpg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Hero = () => {
  const images = [room1, room2, room3].map((image) => image.src);

  return (
    <section className="aspect-[17/25] w-full md:aspect-[2/1] lg:aspect-[7/3]">
      <ImageCarousel images={images} />
    </section>
  );
};

export default Hero;
