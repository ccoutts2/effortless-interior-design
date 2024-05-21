import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ImageModalProps {
  closeModal: () => void;
  images: string[];
  currentIndex: number;
}

const ImageModal = ({ closeModal, images, currentIndex }: ImageModalProps) => {
  const container = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={container}
      className="fixed inset-0 z-[50] flex items-center justify-center bg-black bg-opacity-75 opacity-0"
    >
      <div className="relative h-full w-full md:h-[90%] md:w-[60%]">
        <button
          onClick={closeModal}
          className="absolute bottom-2 left-[45%] z-[55] text-4xl"
        >
          {" "}
          <AiFillCloseCircle />
        </button>
        <div className="h-full w-full cursor-zoom-in object-cover">
          <ImageCarousel
            images={images}
            auto={false}
            showNavButtons={false}
            showNavSliders={true}
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageModal;
