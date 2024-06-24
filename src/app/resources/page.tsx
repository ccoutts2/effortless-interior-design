"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

import Resources from "@/components/Resources/Resources";
import { PageHeader } from "@/components";

const Page = () => {
  const [selectedArticle, setSelectedArticle] = useState("all posts");

  const articles = useRef<(HTMLElement | null)[]>([]);

  const onClick = (article: string, index: number) => {
    setSelectedArticle(article);
    gsap.to(articles.current[index], {
      scale: 1.1,
      duration: 0.2,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.to(articles.current[index], {
          scale: 1,
          duration: 0.2,
          ease: "power4.inOut",
        });
      },
    });
  };

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
      <PageHeader header="resources" />
      <section className="centered flex-col">
        <nav>
          <ul className="centered cursor-pointer gap-12 capitalize">
            {["all posts", "articles", "videos"].map((article, index) => {
              return (
                <li
                  key={index}
                  className={selectedArticle === article ? "font-bold" : ""}
                  onClick={() => onClick(article, index)}
                  ref={(el) => (articles.current[index] = el)}
                >
                  {article}
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <Resources showHeader={false} articleFilter={selectedArticle} />
    </>
  );
};

export default Page;
