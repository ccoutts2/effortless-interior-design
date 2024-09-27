"use client";
import { useRef, FormEvent, useState } from "react";
import { PageHeader } from "@/components";
import ContactPageForm from "@/components/forms/ContactPageForm";
import { handleContactForm } from "@/lib/actions";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextArea] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Send");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const form = useRef<HTMLFormElement | null>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "textarea") setTextArea(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current) {
      setLoading(true);
      setMessage(null);

      const formState = { message: "" };
      const response = await handleContactForm(formState, form.current);

      if (response && response.message) {
        setMessage(response.message);

        if (response.message === "Success") {
          setName("");
          setEmail("");
          setTextArea("");
          setButtonLabel("Sent");
        }
      }
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader header="contact us" />
      <section className="centered lf:px-32 flex-col px-4 md:px-12">
        <h1 className="text-2xl">
          Got a question? Don&apos;t hesitate to get in touch!
        </h1>
        {message && <p>{message}</p>}
        <ContactPageForm
          ref={form}
          onSubmit={onSubmit}
          handleInputChange={handleInputChange}
          buttonLabel={buttonLabel}
        />
        {loading && <p>Sending message...</p>}
      </section>
    </>
  );
};

export default Page;
