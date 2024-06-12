"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Paragraphs from "@/components/Paragraphs/Paragraphs";
import Button from "@/components/buttons/Button/Button";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <ImageContainer />
      <HeaderSection />
      <TextSection />
    </>
  );
};

export default Page;

const ImageContainer = () => {
  return (
    <div className="mt-[5vh] h-[25rem] w-[full] md:h-[40rem] md:px-12 lg:px-32">
      <img
        src="/assets/images/eid13.jpg"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

const HeaderSection = () => {
  return (
    <section className="relative p-4 pt-6 md:p-12 lg:px-32">
      <div className="absolute inset-0 flex items-center px-4 md:px-12 lg:px-32">
        <div className="w-full border-b border-[#5d3a40]"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-[#f3eee8] px-4 text-2xl md:text-4xl">
          Consultations
        </span>
      </div>
    </section>
  );
};

const TextSection = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 pb-12 md:gap-16 md:px-12 md:pb-16 lg:flex-row lg:items-start lg:justify-start lg:px-32">
      <div className="flex-1 md:flex-[1.5]">
        <h3 className="text-xl md:text-2xl">
          Get 1:1 guidance, new ideas and solutions to your interiors problems
        </h3>
        <Paragraphs paragraph="I'm delighted to be offering 1:1 consultations, both online and in person. A consultation with me will give you answers to all your interiors questions, plus lots of new ideas, product recommendations and confidence in your next steps." />
        <Paragraphs paragraph="I am able to provide you with innovative and practical solutions to your design dilemmas; I am passionate about empowering you to create the home you've always wanted, by offering useful advice and solutions that may not have occurred to you before, and introducing you to new suppliers that sell exactly what you need." />
        <Paragraphs paragraph="I am able to get a feel for a space very quickly and we can accomplish a surprising amount in just one consultation. For online consultations, I will ask you to send me photographs of your space before the consultation, and show me around during the call using the camera on your device." />
      </div>
      <div className="flex-1 pt-6 md:pt-0">
        <h2 className="text-xl md:text-2xl">Let&apos;s Get Started</h2>
        <Paragraphs paragraph="To book an online or in-person consultation, please get in touch to tell me about your project. Please include information on which rooms you would like to discuss and the key areas you would like advice on." />
        <Button label="Book a consultation" />
      </div>
    </section>
  );
};
