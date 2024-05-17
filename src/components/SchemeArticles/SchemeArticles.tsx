"use client";
import { useState } from "react";
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
    <section className="flex flex-col items-center justify-center gap-6 p-4 capitalize md:flex-row md:items-stretch md:justify-between xl:px-32 xl:py-12">
      {schemes.map((scheme, index) => (
        <article
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          key={index}
          className="flex w-full flex-col items-start justify-start gap-1 text-center [flex:0_0_auto] md:h-80 md:w-[17rem] xl:h-[25rem] xl:w-[25rem] xl:gap-2"
        >
          <Image
            width={500}
            height={500}
            src={index === isHover ? scheme.srcHover : scheme.src}
            alt="resources"
          />
          <h3 className="text-md">{scheme.title}</h3>
          <p className="text-md">{scheme.price}</p>
        </article>
      ))}
    </section>
  );
};

export default SchemeArticles;
