import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "yellow",
    src: "/assets/images/eid8.jpg",
    srcHover: "/assets/images/eid2.jpg",
    price: "£1000000",
  },
  {
    title: "blue",
    src: "/assets/images/eid9.jpg",
    srcHover: "/assets/images/eid1.jpg",
    price: "£1000000",
  },
  {
    title: "red",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid13.jpg",
    price: "£1000000",
  },
];

const Schemes = () => {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center gap-4 border-b border-black px-4 py-8 text-center">
        <h1 className="text-lg">Off the peg design schemes</h1>
        <p className="text-sm font-light italic">
          Elevate your rooms with Off the peg design schemes tailored to you
        </p>
      </section>

      <FilterOverlay />

      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default Schemes;
