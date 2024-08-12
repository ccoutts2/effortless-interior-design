"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { Button, Input } from "@/components";
import { newsletterSignUp } from "@/lib/actions";

export const NewsletterForm = () => {
  const [formState, formAction] = useFormState(newsletterSignUp, {
    message: "",
  });
  const [email, setEmail] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (formState.message === "Success") setEmail("");
  }, [formState.message]);

  return (
    <form
      action={formAction}
      className="flex w-full flex-col items-center justify-center gap-2"
    >
      {formState.message && <p>{formState.message}</p>}
      <Input
        name="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleInputChange}
      />
      <Button label="Submit" disabled={!email.trim()} />
    </form>
  );
};
