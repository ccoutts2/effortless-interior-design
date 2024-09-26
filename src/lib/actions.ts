import { validateEmail } from "@/utils/validation";
import emailjs from "@emailjs/browser";

export const contactFormSubmit = async (form: HTMLFormElement | null) => {
  if (!form) return { message: "Form not found" };

  const formData = new FormData(form);
  let email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  if (!validateEmail(email)) return { message: "Must be a valid email" };
  email = email.toLowerCase();

  if (!name) return { message: "Please enter a name" };

  //   need to link holly to an email.js account so we can imput the IDs
  try {
    await emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY",
    );

    return { message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return { message: error };
  }
};
