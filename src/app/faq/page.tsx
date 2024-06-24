import { PageHeader } from "@/components";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <PageHeader header="frequently asked questions" />
      <div className="centered flex-col">
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
      </div>
    </section>
  );
};

export default page;
