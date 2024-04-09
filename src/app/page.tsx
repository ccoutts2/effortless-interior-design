"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Hero/Hero";
import HomeBio from "@/components/HomeBio/HomeBio";
import SchemeSlider from "@/components/ShemeSlider/SchemeSlider";
import OurStory from "@/components/OurStory/OurStory";
import Lenis from "@studio-freight/lenis";
import Testimonials from "@/components/Testimonials/Testimonials";

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
    <main className={styles.main}>
      <Hero />
      <HomeBio />
      <SchemeSlider />
      <OurStory />
      <Testimonials />
    </main>
  );
}
