import { PageHeader } from "@/components";

const Page = () => {
  return (
    <section className="mt-[5vh]">
      <PageHeader header="About Us" />
      <section className="gap-12 md:px-12 lg:mx-auto lg:my-0 lg:flex lg:items-stretch lg:px-32 lg:py-8">
        <div className="lg:flex lg:flex-1 lg:items-stretch">
          <div className="h-[25rem] w-full md:h-[40rem] lg:h-auto lg:flex-1">
            <img
              src="/assets/images/portrait.png"
              alt="Holly Lomax portrait by a shelving unit"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="gap-6 px-4 py-8 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:px-0 lg:py-0">
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
    </section>
  );
};

export default Page;
