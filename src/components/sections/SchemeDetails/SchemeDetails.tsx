"use client";
import type { Scheme, Image } from "@prisma/client";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { ImageCarousel } from "@/components";
import { useCheckoutContext } from "@/contexts";

interface SchemeDetailsProps {
  scheme: Scheme & { images: Image[] };
}

export const SchemeDetails = ({
  scheme: { name, description, price, images, id },
}: SchemeDetailsProps) => {
  const { checkout, setCheckout, setShowBasket } = useCheckoutContext();
  const [quantity, setQuantity] = useState<number>(1);

  const addQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToBasket = () => {
    setCheckout((prevCheckout) => {
      const schemeToAdd = { id, quantity };
      return prevCheckout
        ? {
            ...prevCheckout,
            schemes: [...prevCheckout.schemes, schemeToAdd],
          }
        : {
            schemes: [schemeToAdd],
            tier: 1,
          };
    });

    setShowBasket(true);
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
        <div className="relative h-[65vh] cursor-pointer px-4 py-4 md:h-[80vh] md:px-12 lg:w-full">
          <ImageCarousel
            images={images.map(({ url }) => url)}
            navType="arrows"
            hasFullScreen
          />
        </div>
        <div className="px-4 md:px-12 lg:py-4">
          <div>
            <h2 className="w-[80%] pb-[1.75rem] font-medium uppercase">
              {name}
            </h2>
            <h3 className="text-base font-medium capitalize">{description}</h3>
          </div>
          <article className="py-[1.75rem]">
            <p className="px-0 py-[0.4]">£{price / 100}</p>
            {dropDown.map((item, index) => (
              <div key={index} className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title font-medium">{item.title}</div>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus dignissimos libero omnis reprehenderit,
                    praesentium laborum aliquid velit eveniet quam minus,
                    delectus eius ab ullam nesciunt fugiat aspernatur! Harum,
                    nobis fugiat.
                  </p>
                </div>
              </div>
            ))}
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
          <div className="flex flex-col items-center gap-5">
            <button
              className="flex w-full justify-center rounded border-none bg-white px-4 py-2 capitalize text-black"
              onClick={addToBasket}
            >
              add to basket
            </button>
            <button className="flex w-full justify-center rounded border-none bg-purple-500 px-4 py-2 capitalize text-white">
              pay with stripe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
