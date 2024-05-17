import SchemePageHeader from "@/components/SchemePageHeader/SchemePageHeader";
import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

const schemes = [
  {
    title: "room1",
    src: "/assets/images/eid6.jpg",
    srcHover: "/assets/images/eid4.jpg",
    price: "£1000000",
  },
  {
    title: "room2",
    src: "/assets/images/eid13.jpg",
    srcHover: "/assets/images/eid1.jpg",
    price: "£1000000",
  },
  {
    title: "room3",
    src: "/assets/images/eid14.jpg",
    srcHover: "/assets/images/eid5.jpg",
    price: "£1000000",
  },
];

interface RoomSchemes {
  params: {
    roomType: string;
  };
}

const RoomSchemes = ({ params: { roomType } }: RoomSchemes) => {
  return (
    <>
      <SchemePageHeader roomType={roomType} />
      <FilterOverlay />
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default RoomSchemes;
