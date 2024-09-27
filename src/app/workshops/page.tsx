"use client";
import { useEffect } from "react";
import { assetsConfig } from "@/config/assets";
import Lenis from "lenis";
import Testimonials from "@/components/Testimonials/Testimonials";
import { Input } from "@/components";
import { Button } from "@/components";

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
      "You don't know where to find the right fabrics, wallpapers furnishings etc",
  },
  {
    problem:
      "You dont know enough about upholstery, curtains, blinds or soft furnishings to stray from the basics",
  },
];

const Workshops = () => {
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
      <div className="mt-24 flex flex-col items-start justify-start md:flex-row md:items-stretch md:justify-between md:gap-6 md:p-12 lg:px-32 lg:py-5">
        <div className="flex h-full flex-1 flex-col items-end justify-between px-4 md:p-0">
          <div className="leading-6 md:leading-8">
            <h1 className="uppercase">workshops</h1>
            <p className="py-2 ">Hello,</p>
            <p className="py-2">
              The number one problem my clients have is that they lack
              confidence when putting design schemes together. A lack of
              confidence leads to indecision, frustration and, even after
              you&apos;ve finally made a decision, doubt as to whether
              you&apos;ve made the right choice, or wasted your money.
            </p>
            <p className="py-2">
              A lack of confidence in your design decisions stems from the
              following problems. Do any of them resonate with you?
            </p>
            <ul className="list-inside">
              {bulletPoints.map((point, index) => (
                <li className="p-1" key={index}>
                  {point.problem}
                </li>
              ))}
            </ul>
            <p className="py-2">
              This workshop is a deep-dive into everything you need to know to
              create sensational design schemes.
            </p>
            <p className="py-2">
              It will give you the knowledge, tools and step-by-step methods you
              need to banish your doubts, and start designing your home with
              ease and confidence.
            </p>
            <p className="py-2">
              The workshop will include several design exercises, some shorter,
              some longer, so that you can immediately put everything you are
              learning into practice, in order to build your confidence and
              consolidate the lessons in your mind.
            </p>
            <p className="py-2">
              I really want the skills you are learning to stick, so that you
              can repeat them with ease when you are designing at home!
            </p>
          </div>
          <form className="flex w-full flex-col items-start justify-start">
            <Input name="name" />
            <Input name="email" />
            <Button label="enquire" />
          </form>
        </div>
        <div className="h-full w-full flex-1 border-none md:flex-[1]">
          <video
            controls={false}
            autoPlay
            loop
            muted
            className="h-full w-full border-none object-cover"
          >
            <source
              src={assetsConfig.workshopsReelVideo.src}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Workshops;
