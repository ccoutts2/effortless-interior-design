import SchemePageHeader from "@/components/SchemePageHeader/SchemePageHeader";
import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "Kitchen1",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid6.jpg",
    price: "£1000000",
  },
  {
    title: "Kitchen2",
    src: "/assets/images/eid1.jpg",
    srcHover: "/assets/images/eid13.jpg",
    price: "£1000000",
  },
  {
    title: "Kitchen3",
    src: "/assets/images/eid2.jpg",
    srcHover: "/assets/images/eid3.jpg",
    price: "£1000000",
  },
];

const KitchenScheme: React.FC = () => {
  return (
    <>
      <SchemePageHeader room="kitchen" />
      <FilterOverlay />
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default KitchenScheme;
