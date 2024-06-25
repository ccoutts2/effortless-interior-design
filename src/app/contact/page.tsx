"use client";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Input from "@/components/Input/Input";
import { PageHeader } from "@/components";

const Page = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
          publicKey: "YOUR_PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    }
  };

  return (
    <section>
      <PageHeader header="contact us" />
      <div className="centered lf:px-32 flex-col px-4 md:px-12">
        <h1 className="text-2xl">
          Got a question? Don&apos; hesitate to get in touch!
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex w-full flex-col items-start py-4"
        >
          <Input name="name" />
          {/* <label>Name</label>
          <input type="text" name="user_name" /> */}
          <Input name="email" />
          {/* <label>Email</label>
          <input type="email" name="user_email" /> */}
          <Input name="message" />
          {/* <label>Message</label> */}
          {/* <textarea name="message" />
          <input type="submit" value="Send" /> */}
        </form>
      </div>
    </section>
  );
};

export default Page;
