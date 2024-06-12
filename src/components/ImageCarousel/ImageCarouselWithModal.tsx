import { createPortal } from "react-dom";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { AiFillCloseCircle } from "react-icons/ai";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  auto?: boolean;
  interval?: number;
  onClick?: MouseEventHandler;
  showNavSliders?: boolean;
  showNavButtons?: boolean;
}

const ImageCarouselWithModal = ({ images, currentIndex }: ImageModalProps) => {
  //   const container = useRef<HTMLElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //   useGSAP(
  //     () => {
  //       gsap.to(container.current, {
  //         delay: 0.1,
  //         duration: 0.8,
  //         opacity: 1,
  //         ease: "power4.inOut",
  //       });
  //     },
  //     { scope: container },
  //   );

  useEffect(() => {
    isModalOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [isModalOpen]);

  return (
    <>
      <ImageCarousel
        images={images}
        auto={false}
        showNavButtons={false}
        showNavSliders={true}
        currentIndex={currentIndex}
        onClick={handleImageClick}
      />

      {isModalOpen &&
        createPortal(
          <section
            // ref={container}
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
                <ImageCarousel
                  images={images}
                  auto={false}
                  showNavButtons={false}
                  showNavSliders={true}
                  onClick={handleImageClick}
                  currentIndex={currentIndex}
                />
              </div>
            </div>
          </section>,
          document.body,
        )}
    </>
  );
};

export default ImageCarouselWithModal;
