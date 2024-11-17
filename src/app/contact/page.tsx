import { PageHeader } from "@/components";
import ContactPageForm from "@/components/forms/ContactPageForm";

export default async function Page() {
  return (
    <>
      <PageHeader header="contact us" />
      <section className="centered lf:px-32 flex-col px-4 md:px-12">
        <h1 className="text-2xl">
          Got a question? Don&apos;t hesitate to get in touch!
        </h1>
        <ContactPageForm />
      </section>
    </>
  );
}
