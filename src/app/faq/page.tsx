import { PageHeader } from "@/components";
import DetailDropdown from "@/components/DetailDropdown/DetailDropdown";
import { details } from "./data";

const page = () => {
  return (
    <section className="w-full">
      <PageHeader header="FAQs" />
      <div className="centered w-full flex-col px-4">
        <p>
          Please contact {""}
          <a
            className="underline"
            href="mailto:info@effortlessinteriordesign.com"
          >
            info@effortlessinteriordesign.com
          </a>
          {""} if you cannot find an answer to your question.
        </p>
        <div className="flex w-full flex-col items-start justify-start pt-8 md:px-12 lg:px-32">
          <DetailDropdown
            details={details}
            className="border-b border-[#5d3a40]"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
