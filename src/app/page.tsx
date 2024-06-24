"use client";
import { useEffect } from "react";
import { Hero } from "@/components";
import HomeBio from "@/components/HomeBio/HomeBio";
import SchemeSlider from "@/components/ShemeSlider/SchemeSlider";
import OurStory from "@/components/OurStory/OurStory";
import Lenis from "lenis";
import Testimonials from "@/components/Testimonials/Testimonials";
import Resources from "@/components/Resources/Resources";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Hero />
      <OurStory />
      <SchemeSlider />
      <HomeBio />
      <Testimonials />
      <Resources articleFilter="all posts" />
    </main>
  );
}
