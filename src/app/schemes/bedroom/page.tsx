import SchemePageHeader from "@/components/SchemePageHeader/SchemePageHeader";
import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "Bedroom1",
    src: "/assets/images/eid6.jpg",
    srcHover: "/assets/images/eid4.jpg",
    price: "£1000000",
  },
  {
    title: "Bedroom2",
    src: "/assets/images/eid13.jpg",
    srcHover: "/assets/images/eid1.jpg",
    price: "£1000000",
  },
  {
    title: "Bedroom3",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid5.jpg",
    price: "£1000000",
  },
];

const BedroomScheme: React.FC = () => {
  return (
    <>
      <SchemePageHeader room="kitchen" />
      <FilterOverlay />
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default BedroomScheme;
