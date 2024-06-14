import prisma from "@/lib/prisma";
import SchemePageHeader from "@/components/SchemePageHeader/SchemePageHeader";
import SchemeArticles from "@/components/SchemeArticles/SchemeArticles";
// import FilterOverlay from "@/components/FilterOverlay/FilterOverlay";

interface RoomSchemesProps {
  params: {
    roomTypeName: string;
  };
}

const getSchemes = async (roomTypeName: string) => {
  const schemes = await prisma.scheme.findMany({
    where: { roomTypeName, isAvailable: true },
    include: {
      images: {
        orderBy: { schemeIndex: "asc" },
      },
    },
  });
  return schemes;
};

const RoomSchemes = async ({ params: { roomTypeName } }: RoomSchemesProps) => {
  const schemes = await getSchemes(roomTypeName);

  return (
    <>
      <SchemePageHeader roomType={roomTypeName} />
      {/* <FilterOverlay /> */}
      <SchemeArticles schemes={schemes} />
    </>
  );
};

export default RoomSchemes;
