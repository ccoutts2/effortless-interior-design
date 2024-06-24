"use client";
import type { Scheme, Image } from "@prisma/client";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { ImageCarousel } from "@/components";
import ProductDetailDropdown from "@/components/ProductDetailDropdown/ProductDetailDropdown";

interface SchemeDetailsProps {
  scheme: Scheme & { images: Image[] };
}

export const SchemeDetails = ({
  scheme: { name, description, price, images },
}: SchemeDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const dropDown = [
    {
      title: "Details",
    },
    {
      title: "Fabric Prices",
    },
    {
      title: "Get Holly's Help",
    },
  ];

  return (
    <section>
      <div className="lg:flex lg:flex-row lg:justify-center">
        <div className="relative h-[65vh] flex-1 cursor-pointer px-4 py-4 md:h-[80vh] md:px-12 lg:w-full">
          <ImageCarousel
            images={images.map(({ url }) => url)}
            navType="arrows"
            hasFullScreen
          />
        </div>
        <div className="flex-1 px-4 md:px-12 lg:py-4 lg:pl-0 ">
          <div className="flex-1">
            <h2 className="w-[80%] pb-[1.75rem] font-medium uppercase">
              {name}
            </h2>
            <h3 className="text-base font-medium capitalize">{description}</h3>
          </div>
          <article className="py-[1.75rem]">
            <p className="px-0 py-[0.4]">£{price / 100}</p>
            <ProductDetailDropdown />
          </article>
          <div className="pb-4 pt-0">
            <div className="flex w-[35%] flex-row items-center justify-center border border-solid border-black">
              <button
                className="flex w-full justify-center rounded border-none px-4 py-2"
                onClick={subtractQuantity}
              >
                <GrSubtract />
              </button>
              <div>{quantity}</div>
              <button
                className="flex w-full justify-center rounded border-none px-4 py-2"
                onClick={addQuantity}
              >
                <GrAdd />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex w-full justify-center rounded border-none bg-purple-500 px-4 py-2 capitalize text-white">
              pay with stripe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
