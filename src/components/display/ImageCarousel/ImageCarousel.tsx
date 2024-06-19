"use client";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useState, useEffect, MouseEventHandler } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";

interface BaseProps {
  images: string[];
  auto?: boolean;
  interval?: number;
  navType?: "arrows" | "circles";
}

interface CarouselProps extends BaseProps {
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageOnClick?: MouseEventHandler;
}

interface ImageCarouselProps extends BaseProps {
  hasFullScreen?: boolean;
}

const Carousel = ({
  images,
  auto = false,
  interval = 5000,
  imageOnClick,
  navType = "circles",
  imageIndex,
  setImageIndex,
}: CarouselProps) => {
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  useEffect(() => {
    if (auto) {
      const intervalImage = setInterval(showNextImage, interval);
      return () => clearInterval(intervalImage);
    }
  }, []);

  return (
    <div className="relative h-full w-full">
      <div className="flex h-[70vh] w-full overflow-hidden lg:h-screen">
        <button
          className="absolute right-4 top-4 z-10 text-3xl md:hidden"
          onClick={imageOnClick}
        >
          <BsPlusCircleFill />
        </button>
        {images.map((url, index) => (
          <Image
            width={600}
            height={400}
            key={url}
            src={url}
            alt="carousel"
            className="absolute left-0 top-0 block h-full w-full shrink-0 grow-0 object-contain"
            style={{
              transition: "opacity 1s ease-in-out",
              opacity: index === imageIndex ? 1 : 0,
            }}
            onClick={imageOnClick}
          />
        ))}
      </div>
      {navType === "arrows" && (
        <>
          <button
            className="absolute bottom-0 top-0 block text-6xl"
            onClick={showPrevImage}
          >
            <VscTriangleLeft />
          </button>
          <button
            className="absolute bottom-0 right-0 top-0 block text-6xl"
            onClick={showNextImage}
          >
            <VscTriangleRight />
          </button>
        </>
      )}

      {navType === "circles" && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              className={`
            relative mx-[6px] inline-block h-[9px] w-[9px] cursor-pointer rounded-full border [transition:color_0.2s_ease-in-out]
              ${
                index === imageIndex
                  ? "border-[#d9c6c5] bg-[#d9c6c5]"
                  : "border-[#d9c6c5] bg-transparent"
              }
            `}
              onClick={() => setImageIndex(index)}
            >
              <span aria-hidden="true"></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const ImageCarousel = ({
  images,
  auto,
  interval,
  hasFullScreen = false,
  navType = "circles",
}: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [isModalOpen]);

  return (
    <>
      <Carousel
        images={images}
        auto={auto}
        interval={interval}
        navType={navType}
        imageIndex={imageIndex}
        imageOnClick={handleImageClick}
        setImageIndex={setImageIndex}
      />

      {hasFullScreen &&
        isModalOpen &&
        createPortal(
          <section
            onClick={closeModal}
            className="fixed left-0 top-0 z-50 flex h-screen w-screen cursor-auto items-center justify-center overflow-hidden bg-black bg-opacity-75"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="relative h-full w-full md:h-[90%] md:w-[60%]"
            >
              <button
                onClick={closeModal}
                className="-translate-1/2 absolute bottom-2 left-1/2 z-[55] transform text-4xl"
              >
                <AiFillCloseCircle />
              </button>
              <div className="h-full w-full cursor-auto object-cover">
                <Carousel
                  images={images}
                  navType="arrows"
                  imageIndex={imageIndex}
                  imageOnClick={handleImageClick}
                  setImageIndex={setImageIndex}
                />
              </div>
            </div>
          </section>,
          document.body,
        )}
    </>
  );
};
