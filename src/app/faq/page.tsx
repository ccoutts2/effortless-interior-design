import { PageHeader } from "@/components";
import { Accordion } from "@/components/Accordion/Accordion";
import { accordionData } from "./data";
import Link from "next/link";

export default async function Page() {
  return (
    <section className="w-full">
      <PageHeader header="FAQs" />
      <div className="centered w-full flex-col px-4">
        <p>
          Please contact {""}
          <Link
            className="underline"
            href="mailto:info@effortlessinteriordesign.com"
          >
            info@effortlessinteriordesign.com
          </Link>
          {""} if you cannot find an answer to your question.
        </p>
        <div className="flex w-full flex-col items-start justify-start pt-8 md:px-12 lg:px-32">
          <Accordion items={accordionData} />
        </div>
      </div>
    </section>
  );
}
