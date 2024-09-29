"use client";
import { forwardRef } from "react";
import type { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { Button, Input } from "@/components";
import Textarea from "../inputs/Input/Textarea";

interface ContactPageFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  handleInputChange: any;
  buttonLabel: string;
}

export const ContactPageForm = forwardRef<
  HTMLFormElement,
  ContactPageFormProps
>(({ buttonLabel, handleInputChange, ...defaultProps }, ref) => {
  return (
    <form
      ref={ref}
      {...defaultProps}
      className="flex w-full flex-col items-start py-4"
    >
      <Input name="name" placeholder="Your Name" onChange={handleInputChange} />
      <Input
        name="email"
        placeholder="Your Email"
        onChange={handleInputChange}
      />
      <Textarea
        name="textarea"
        placeholder="Your Message"
        onChange={handleInputChange}
      />
      <Input type="checkbox" name="checkbox" placeholder="Agree to terms" />
      <Button label={buttonLabel} type="submit" />
    </form>
  );
});

ContactPageForm.displayName = "ContactPageForm";

export default ContactPageForm;
