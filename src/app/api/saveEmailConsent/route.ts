import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const prisma = new PrismaClient();

const Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
  emailConsent: z.boolean(),
});

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type");
    if (contentType !== "application/json") {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 400 },
      );
    }

    const body = await req.json();

    if (!body) {
      return NextResponse.json(
        { error: "Request body is empty or malformed" },
        { status: 400 },
      );
    }

    const validatedData = Schema.parse(body);

    const user = await prisma.user.upsert({
      where: { email: validatedData.email },
      update: {
        name: validatedData.name,
        emailConsent: validatedData.emailConsent,
      },
      create: {
        email: validatedData.email,
        name: validatedData.name,
        emailConsent: validatedData.emailConsent,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Error saving email consent:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid JSON input" },
        { status: 400 },
      );
    }

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
