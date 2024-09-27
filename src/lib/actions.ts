import emailjs from "@emailjs/browser";
import { validateEmail } from "@/utils/validation";

export const handleContactForm = async (
  formState: { message: string },
  formElement: HTMLFormElement,
) => {
  try {
    const formData = new FormData(formElement);

    let name = formData.get("name");
    if (!name) return { message: "Please enter a name" };

    let email = formData.get("email");
    if (!validateEmail(email)) return { message: "Must be a valid email" };
    email = email.toLowerCase();

    let textarea = formData.get("textarea");
    if (!textarea) return { message: "Please enter a message" };

    if (!name || !email || !textarea) {
      return { message: "All fields are required" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Error" };
  }

  const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
    throw new Error("EmailJS environment variables are not set.");
  }

  const sendEmail = await emailjs
    .sendForm(emailServiceId, emailTemplateId, formElement, emailPublicKey)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
};
