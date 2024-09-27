"use client";
import { forwardRef } from "react";
import type { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { Button, Input } from "@/components";

interface ContactPageFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const ContactPageForm = forwardRef<
  HTMLFormElement,
  ContactPageFormProps
>(({ ...restProps }, ref) => {
  return (
    <form
      ref={ref}
      {...restProps}
      className="flex w-full flex-col items-start py-4"
    >
      <Input name="name" placeholder="Your Name" />
      <Input name="email" placeholder="Your Email" />
      <Input name="message" placeholder="Your Message" />
      <Button label="Send" type="submit" />
    </form>
  );
});

ContactPageForm.displayName = "ContactPageForm";

export default ContactPageForm;
