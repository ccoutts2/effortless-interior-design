"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCheckoutContext } from "@/contexts";

import Image from "next/image";

export const BasketOverlay = () => {
  const { checkout, showBasket, setShowBasket } = useCheckoutContext();
  const container = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const filterItem = useRef<(HTMLDivElement | null)[]>([]);

  const tl = useRef<GSAPTimeline | null>();

  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  useGSAP(
    () => {
      gsap.set(filterItem.current, { y: 75 });

      tl.current = gsap.timeline({ paused: true }).to(overlay.current, {
        duration: 0.5,
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        ease: "power4.inOut",
      });
    },
    { scope: container },
  );

  useEffect(() => {
    if (showBasket) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [showBasket]);

  return (
    <section
      ref={overlay}
      className="fixed right-0 top-0 z-50 flex h-screen w-[60vw] flex-col bg-[#f3eee8] shadow-[-10px_0px_15px_0px_rgb(0,0,0)] [clip-path:polygon(100%_0,100%_0,100%_100%,100%_100%)] md:w-[30vw]"
    >
      <div className="relative flex w-full justify-between border-b border-solid border-black p-8">
        <h3 className="text-lg uppercase">basket</h3>
        <span className="cursor-pointer" onClick={toggleBasket}>
          &#x2715;
        </span>
      </div>

      {checkout && checkout.schemes.length > 0 ? (
        <div>
          {checkout.schemes.map((scheme) => {
            return (
              <p key={scheme.id}>
                {scheme.id}: {scheme.quantity}
              </p>
            );
          })}
        </div>
      ) : (
        <div>Nothin in ya basket</div>
      )}
    </section>
  );
};
