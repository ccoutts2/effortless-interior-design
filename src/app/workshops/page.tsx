"use client";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { assetsConfig } from "@/config/assets";
import Lenis from "@studio-freight/lenis";
import Testimonials from "@/components/Testimonials/Testimonials";

interface BulletPoints {
  problem: string;
}

const bulletPoints: BulletPoints[] = [
  {
    problem:
      "You can't decide how you want your home to look, or where to even start",
  },
  {
    problem: "You have so many ideas that you don't know which one to run with",
  },
  {
    problem:
      "You know the look you want, but you don't know how to choose the right products to achieve it",
  },
  {
    problem:
      "You're afraid that you don't know how to mix colours and patterns without it looking like a mess",
  },
  {
    problem:
      "You don't know where to find the right fabrics, wallpapers furnishings etc.",
  },
  {
    problem:
      "You dont know enough about upholstery, curtains, blinds or soft furnishings to stray from the basics",
  },
];

const Workshops: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <section>
      <div className="flex flex-col items-start justify-start md:flex-row md:items-stretch md:justify-between md:gap-6 md:p-12 lg:px-32 lg:py-5">
        {/* <section className={styles.textContent}> */}
        <section className="mt-12 flex h-full flex-col items-end justify-start md:mt-0 md:w-[50%]">
          {/* <div className={styles.workshops}> */}
          <div className="flex h-full flex-col items-end justify-between px-4 md:p-0">
            <div className={styles.textContainer}>
              <h1 className={styles.header}>workshops</h1>
              <p>Hello,</p>
              <p>
                The number one problem my clients have is that they lack
                confidence when putting design schemes together. A lack of
                confidence leads to indecision, frustration and, even after
                you&apos;ve finally made a decision, doubt as to whether
                you&apos;ve made the right choice, or wasted your money.
              </p>
              <p>
                A lack of confidence in your design decisions stems from the
                following problems. do any of them resonate with you?
              </p>
              <ul>
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point.problem}</li>
                ))}
              </ul>
              <p>
                This workshop is a deep-dive into everything you need to know to
                create sensational design schemes.
              </p>
              <p>
                It will give you the knowledge, tools and step-by-step methods
                you need to banish your doubts, and start designing your home
                with ease and confidence.
              </p>
              <p>
                The workshop will include several design exercises, some
                shorter, some longer, so that you can immediately put everything
                you are learning into practice, in order to build your
                confidence and consolidate the lessons in your mind.
              </p>
              <p>
                I really want the skills you are learning to stick, so that you
                can repeat them with ease when you are designing at home!
              </p>
            </div>
            <form className={styles.form}>
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                className={styles.input}
              ></input>

              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className={styles.input}
              ></input>

              <button className={styles.button}>enquire</button>
            </form>
          </div>
        </section>
        <section className={styles.videoSection}>
          <div className={styles.videoContainer}>
            <video
              controls={false}
              autoPlay
              loop
              muted
              className={styles.video}
            >
              <source
                src={assetsConfig.workshopsReelVideo.src}
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      </div>
      <section className={styles.testimonials}>
        <Testimonials />
      </section>
    </section>
  );
};

export default Workshops;
