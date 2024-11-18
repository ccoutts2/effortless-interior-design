import Image from "next/image";
import { PageHeader } from "@/components";
import Link from "next/link";

const Page = () => {
  return (
    <section className="mt-[5vh]">
      <PageHeader header="About Us" />
      <section className="gap-12 md:px-12 lg:mx-auto lg:my-0 lg:flex lg:items-stretch lg:px-32 lg:py-8">
        <div className="h-[25rem] w-full md:h-[40rem] lg:flex lg:h-auto lg:flex-1 lg:items-stretch">
          <Image
            width={1741}
            height={2054}
            src="/assets/images/portrait.png"
            alt="Holly Lomax portrait by a shelving unit"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="gap-6 px-4 py-8 md:px-0 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:py-0">
          <p className="pb-4 lg:pb-0">
            Effortless Interior Design was founded by interior designer Holly
            Lomax
          </p>
          <p className="py-4 lg:py-0">
            Originally from Norfolk, Holly studied History of Art and
            Architectural History at the universities of Edinburgh and
            Cambridge. This academic background in design analysis,
            architectural history, classical composition and building
            construction serves as an excellent foundation to her work as an
            interior designer.
          </p>
          <p className="py-4 lg:py-0">
            Holly trained in interior design under the internationally-renowned
            designer Rita Konig (House & Garden Top 100, AD Top 100), before
            working as a senior designer for Isabella Worsley and Lucy
            Cunningham (House & Garden Top 100). In these studios, Holly has
            been the lead designer of several multi-million pound projects,
            including Grade I listed country houses, elegant London townhouses
            and stunning new-builds.
          </p>
          <p className="py-4 lg:py-0">
            Holly is a gifted public speaker and has a natural, authentic
            teaching style. She is passionate about passing on the knowledge she
            has gained and publishes free video tutorials and written articles
            on all aspects of interior design.
          </p>
          <p className="py-4 lg:py-0">
            Holly is on a mission to empower you to create the home you&apos;ve
            always wanted. Through workshops and consultations, she helps
            clients feel enlightened and energised about their interiors, giving
            them the design skills, knowledge and suppliers they need to
            transform their home with ease and confidence.
          </p>
        </div>
      </section>
      <section className="px-4 pb-8 md:px-12 md:pt-2 lg:px-32">
        <h3 className="text-2xl">Need more information?</h3>
        <p className="pt-4">
          Head to our {""}
          <span className="cursor-pointer underline">
            <Link href="/faq">FAQ&apos;s</Link>
          </span>
        </p>
      </section>
    </section>
  );
};

export default Page;
