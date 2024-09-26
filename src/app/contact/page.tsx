"use client";
import { useRef, useState, useEffect } from "react";
import { useFormState } from "react-dom";
import emailjs from "@emailjs/browser";
import { Input } from "@/components";
import { PageHeader } from "@/components";
import { contactFormSubmit } from "@/lib/actions";

const Page = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formState, formAction] = useFormState(contactFormSubmit, {
    message: "",
  });

  const [email, setEmail] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (formState.message === "Email sent successfully") setEmail("");
  }, [formState.message]);

  return (
    <section>
      <PageHeader header="contact us" />
      <div className="centered lf:px-32 flex-col px-4 md:px-12">
        <h1 className="text-2xl">
          Got a question? Don&apos; hesitate to get in touch!
        </h1>
        <form
          action={formAction}
          className="flex w-full flex-col items-start py-4"
        >
          <Input name="name" value="name" onChange={handleInputChange} />
          {/* <label>Name</label>
          <input type="text" name="user_name" /> */}
          <Input name="email" value="email" onChange={handleInputChange} />
          {/* <label>Email</label>
          <input type="email" name="user_email" /> */}
          <Input name="message" value="message" onChange={handleInputChange} />
          {/* <label>Message</label> */}
          {/* <textarea name="message" />
          <input type="submit" value="Send" /> */}
        </form>
      </div>
    </section>
  );
};

export default Page;
