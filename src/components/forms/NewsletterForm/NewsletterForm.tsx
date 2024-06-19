"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";

import Input from "@/components/Input/Input";

import { newsletterSignUp } from "@/lib/actions";

export const NewsletterForm = () => {
  const [formState, formAction] = useFormState(newsletterSignUp, {
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const submit = async (formData: FormData) => {
    formAction(formData);
    if (formState.message === "Success") formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      action={submit}
      className="flex w-full flex-col items-center justify-center gap-2"
    >
      {formState.message && <p>{formState.message}</p>}
      <Input name="email" placeholder="enter your email address" />
      <button className="text-xs lg:text-base">Submit</button>
    </form>
  );
};
