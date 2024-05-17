"use client";
import { useState } from "react";
import room1 from "../../../../../public/assets/images/eid2.jpg";
import room2 from "../../../../../public/assets/images/eid5.jpg";
import room3 from "../../../../../public/assets/images/eid11.jpg";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";

interface RoomSchemeProps {
  params: {
    roomId: string;
  };
}

const RoomScheme = ({ params: { roomId } }: RoomSchemeProps) => {
  const images = [room1, room2, room3].map((image) => image.src);

  const [quantity, setQuantity] = useState<number>(1);

  const countUp = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const countDown = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addQuantity = () => {
    countUp();
  };

  const subtractQuantity = () => {
    countDown();
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
    <section className="mt-[15vh]">
      <div className="px-4 md:px-12">
        <p>paper trail placeholder for the time being</p>
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center">
        <div className="h-[65vh] px-4 py-4 md:h-[80vh] md:px-12 lg:w-full">
          <ImageCarousel images={images} />
        </div>
        <div className="px-4 md:px-12 lg:py-4">
          <div>
            <h2 className="w-[80%] pb-[1.75rem] font-medium uppercase">
              linen frill bathmat, sky blue
            </h2>
            <h3 className="text-base font-medium capitalize">
              handwoven, this bathmat is a classic bathroom essential done the
              holly lomax way.
            </h3>
          </div>
          <article className="py-[1.75rem]">
            <p className="px-0 py-[0.4]">£1000</p>
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
            <div className="justif-center flex w-[35%] flex-row items-center border border-solid border-black">
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

export default RoomScheme;
