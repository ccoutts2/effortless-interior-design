"use server";
import { validateEmail } from "@/utils/validation";
import { prisma } from "@/lib";

export const newsletterSignUp = async (
  formState: { message: string },
  formData: FormData,
) => {
  try {
    let email = formData.get("email");
    if (!validateEmail(email)) return { message: "Must be a valid email" };
    email = email.toLowerCase();

    await prisma.user.upsert({
      where: { email },
      update: { newsletterSub: true },
      create: { email, newsletterSub: true },
    });
    return { message: "Success" };
  } catch (error) {
    console.error(error);
    return { message: "Error" };
  }
};
