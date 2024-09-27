"use client";
import { useRef, FormEvent } from "react";
import { PageHeader } from "@/components";
import ContactPageForm from "@/components/forms/ContactPageForm";
import { handleContactForm } from "@/lib/actions";

const Page = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (form.current) {
      const formState = { message: "" };
      const response = await handleContactForm(formState, form.current);
      if (response && response.message) {
        return { message: response.message };
      }
    }
  };

  return (
    <>
      <PageHeader header="contact us" />
      <section className="centered lf:px-32 flex-col px-4 md:px-12">
        <h1 className="text-2xl">
          Got a question? Don&apos;t hesitate to get in touch!
        </h1>
        <ContactPageForm ref={form} onSubmit={onSubmit} />
      </section>
    </>
  );
};

export default Page;
