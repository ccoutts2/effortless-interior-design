"use client";
import { useRef, useState } from "react";
import { Button, Input, Textarea, Toast } from "@/components";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string({
      invalid_type_error: "Invalid email",
    })
    .email(),
  textarea: z.string().min(1, "Message is required"),
  emailConsent: z.boolean().optional(),
});

export const ContactPageForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailConsent, setEmailConsent] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [buttonLabel, setButtonLabel] = useState("Send");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "checkEmailConsent") {
      setEmailConsent(checked);
    }

    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
      const emailValidation = Schema.shape.email.safeParse(value);
      setEmailError(
        emailValidation.success ? "" : "Please input a valid email",
      );
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "textarea") {
      setTextarea(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessages({});
    setButtonLabel("Sending");

    const validatedFields = Schema.safeParse({
      name,
      email,
      textarea,
      emailConsent,
    });

    if (!validatedFields.success) {
      setErrorMessages(validatedFields.error.flatten().fieldErrors);
      setButtonLabel("Send");
      return;
    }

    try {
      if (emailConsent) {
        await fetch("/api/saveEmailConsent", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            emailConsent: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
        setErrorMessages({
          message: "EmailJS environment variables are not set.",
        });
        return;
      }

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          name: validatedFields.data.name,
          email: validatedFields.data.email,
          textarea: validatedFields.data.textarea,
        },
        emailPublicKey,
      );

      setName("");
      setEmail("");
      setTextarea("");
      setEmailConsent(false);
      setButtonLabel("Send");
      setEmailError("");
      setIsToastVisible(true);

      setTimeout(() => setIsToastVisible(false), 5000);
      return { message: "Success" };
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex w-full max-w-[40rem] flex-col items-start py-4"
    >
      <Input
        name="name"
        onChange={handleInputChange}
        placeholder="Your Name"
        value={name}
        required
      />
      <Input
        name="email"
        type="email"
        onChange={handleInputChange}
        value={email}
        placeholder="Your Email"
        required
      />
      {emailError && <p className="text-sm text-red-700">{emailError}</p>}
      <Textarea
        name="textarea"
        onChange={handleTextareaChange}
        value={textarea}
        placeholder="Your Message"
        rows={5}
        required
      />
      <label className="flex items-center gap-4">
        <input
          type="checkbox"
          name="checkEmailConsent"
          onChange={handleInputChange}
          checked={emailConsent}
        />
        <span className="text-sm md:text-base">
          Do you agree to be contacted by email?
        </span>
      </label>

      <div className="relative w-full pb-1 pt-4">
        <Button label={buttonLabel} type="submit" />
        {Object.keys(errorMessages).length > 0 && (
          <p className="text-sm text-red-700">
            Please enter all the required fields
          </p>
        )}
        {isToastVisible && <Toast />}
      </div>
    </form>
  );
};

ContactPageForm.displayName = "ContactPageForm";

export default ContactPageForm;
