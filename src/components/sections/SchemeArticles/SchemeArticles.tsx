"use client";
import type { Scheme, Image as ImageT } from "@prisma/client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SchemeProps {
  schemes: (Scheme & { images: ImageT[] })[];
}

export const SchemeArticles = ({ schemes }: SchemeProps) => {
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
        <Link
          href={`/schemes/${scheme.roomTypeName}/${scheme.id}`}
          key={scheme.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <article className="flex w-full flex-col items-start justify-start gap-1 text-center [flex:0_0_auto] md:h-80 md:w-[17rem] xl:h-[25rem] xl:w-[25rem] xl:gap-2">
            <Image
              width={600}
              height={400}
              src={
                index === isHover ? scheme.images[1].url : scheme.images[0].url
              }
              alt="resources"
            />
            <h3 className="text-md">{scheme.name}</h3>
            <p className="text-md">£{scheme.price / 100}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};
