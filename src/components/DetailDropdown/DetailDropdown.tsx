"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { PlusMinusButton } from "../buttons/PlusMinusButton/PlusMinusButton";
import { DetailItem } from "@/app/faq/data";

interface DetailDropdownProps {
  details: DetailItem[];
  className?: string;
}

const DetailDropdown = ({ details, className }: DetailDropdownProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(
    Array(details.length).fill(false),
  );

  const container = useRef<HTMLDivElement>(null);
  const dropDown = useRef<(HTMLElement | null)[]>([]);
  const tl = useRef<(GSAPTimeline | null)[]>([]);

  const onClick = (index: number) => {
    setIsDropDownOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useGSAP(
    () => {
      gsap.set(dropDown.current, { autoAlpha: 0, height: 0 });

      details.forEach((_, i) => {
        tl.current[i] = gsap
          .timeline({ paused: true })
          .to(dropDown.current[i], {
            height: "auto",
            autoAlpha: 1,
            duration: 0.95,
            ease: "power3.inOut",
          });
      });
    },
    { scope: container },
  );

  useEffect(() => {
    isDropDownOpen.forEach((isOpen, index) => {
      if (isOpen) {
        tl.current[index]?.play();
      } else {
        tl.current[index]?.reverse();
      }
    });
  }, [isDropDownOpen]);

  return (
    <div className="flex w-full flex-col">
      {details.map((details, index) => (
        <div
          onClick={() => onClick(index)}
          key={index}
          ref={container}
          className={`flex cursor-pointer justify-between py-4 ${className}`}
        >
          <div className="flex flex-col gap-2 md:gap-0">
            <p>{details.header}</p>
            <p
              ref={(el) => (dropDown.current[index] = el)}
              className="pt-1 text-sm"
            >
              {isDropDownOpen[index] && details.details}
            </p>
          </div>
          <div className="z-10">
            <PlusMinusButton isActive={isDropDownOpen[index]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailDropdown;
