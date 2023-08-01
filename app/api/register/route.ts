import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

interface BodyData {
  email: string;
  name: string;
  password: string;
}

export async function POST(request: Request) {
  const { email, name, password } = (await request.json()) as BodyData;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
