"use client";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useState, useEffect, MouseEventHandler, useRef } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import { AiFillCloseCircle } from "react-icons/ai";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type CarouselProps = {
  images: string[];
  auto?: boolean;
  interval?: number;
  imageOnClick?: MouseEventHandler;
  navType?: "arrows" | "circles";
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex?: number;
};

interface ImageCarouselProps {
  images: string[];
  auto?: boolean;
  interval?: number;
  onClick?: MouseEventHandler;
  showNavSliders?: boolean;
  showNavButtons?: boolean;
  hasFullScreen?: boolean;
  navType?: "arrows" | "circles";
  currentIndex?: number;
}

const Carousel = ({
  images,
  auto = false,
  interval = 5000,
  imageOnClick,
  // showNavSliders = false,
  // showNavButtons = true,
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
        {images.map((url, index) => (
          <Image
            width={2000}
            height={2000}
            key={url}
            src={url}
            alt="carousel"
            className="absolute left-0 top-0 block h-full w-full shrink-0 grow-0 object-cover"
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
                  ? "border-yellow-400 bg-yellow-400"
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

const ImageCarousel = ({
  images,
  auto,
  interval,
  hasFullScreen = false,
  navType = "circles",
  currentIndex = 0,
}: ImageCarouselProps) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);

  // useEffect(() => {
  //   setImageIndex(currentIndex);
  // }, [currentIndex]);
  const container = useRef<HTMLElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useGSAP(
    () => {
      gsap.to(container.current, {
        delay: 0.1,
        duration: 0.8,
        opacity: 1,
        ease: "power4.inOut",
      });
    },
    { scope: container },
  );

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
            ref={container}
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
                className="absolute bottom-2 left-[45%] z-[55] text-4xl"
              >
                <AiFillCloseCircle />
              </button>
              <div className="h-full w-full cursor-zoom-in object-cover">
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

// export default ImageCarouselWithModal;
export default ImageCarousel;
