import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";
import SchemePageHeader from "@/components/SchemePageHeader/SchemePageHeader";

const schemes = [
  {
    title: "Livingroom1",
    src: "/assets/images/eid8.jpg",
    srcHover: "/assets/images/eid9.jpg",
    price: "£1000000",
  },
  {
    title: "Livingroom2",
    src: "/assets/images/eid6.jpg",
    srcHover: "/assets/images/eid7.jpg",
    price: "£1000000",
  },
  {
    title: "Livingroom3",
    src: "/assets/images/eid3.jpg",
    srcHover: "/assets/images/eid4.jpg",
    price: "£1000000",
  },
];

const LivingroomScheme: React.FC = () => {
  return (
    <>
      <SchemePageHeader room="livingroom" />
      <FilterOverlay />
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default LivingroomScheme;
