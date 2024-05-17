import SchemePageHeader from "@/components/SchemePageHeader/SchemePageHeader";
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
      <SchemePageHeader room="rooms" />
      <FilterOverlay />
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default Schemes;
