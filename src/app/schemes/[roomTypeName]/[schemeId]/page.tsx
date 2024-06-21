import Link from "next/link";
import { prisma } from "@/lib";
import { SchemeDetails } from "@/components";

interface SchemePageProps {
  params: {
    roomTypeName: string;
    schemeId: string;
  };
}

const getScheme = async (id: number) => {
  const scheme = await prisma.scheme.findUniqueOrThrow({
    where: { id },
    include: {
      images: {
        orderBy: { schemeIndex: "asc" },
      },
    },
  });
  return scheme;
};

const SchemePage = async ({
  params: { roomTypeName, schemeId },
}: SchemePageProps) => {
  const scheme = await getScheme(Number(schemeId));

  return (
    <main>
      <div className="flex gap-8">
        <Link href={`/schemes/${roomTypeName}`}>← Back</Link>
        <div className="flex gap-2">
          <Link href={"/schemes"} className="hover:underline">
            Schemes
          </Link>
          <p>/</p>
          <Link
            href={`/schemes/${roomTypeName}`}
            className="capitalize hover:underline"
          >
            {roomTypeName}
          </Link>
          <p>/</p>
          <p>{scheme.name}</p>
        </div>
      </div>
      <SchemeDetails scheme={scheme} />
    </main>
  );
};

export default SchemePage;
