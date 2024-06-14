import { ImageCarousel } from "@/components";

export const Hero = () => {
  const images = [
    "/assets/images/eid2.jpg",
    "/assets/images/eid3.jpg",
    "/assets/images/eid15.jpg",
  ];

  return (
    <section className="aspect-[17/25] w-full md:aspect-[2/1] lg:aspect-[7/3]">
      <ImageCarousel images={images} navType="circles" auto />
    </section>
  );
};
