import FadingDiv from "../FadingDiv/FadingDiv";

const Testimonials = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center p-4 pt-8 md:px-12 lg:px-32">
      <h2 className="text-center text-xs font-normal capitalize italic">
        testimonials
      </h2>
      <FadingDiv className="w-3/4 md:flex md:flex-col md:items-start md:justify-center md:self-start">
        <p className="pt-4 text-center text-sm capitalize italic md:text-left">
          a super workshop! well presented with concise instructions and
          ideas... my love for interiors has been reignited.
        </p>
        <p className="pt-4 text-center text-xs capitalize italic">
          mary, norfolk
        </p>
      </FadingDiv>
      <FadingDiv className="w-3/4 md:flex md:flex-col md:items-end md:justify-center md:self-end">
        <p className="pt-4 text-center text-sm capitalize italic md:text-right">
          the pace and content were exactly right. i feel inspired and will take
          your advice forward for all future projects.
        </p>
        <p className="pt-4 text-center text-xs capitalize italic">
          rosie, london
        </p>
      </FadingDiv>
    </section>
  );
};

export default Testimonials;
