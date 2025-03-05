// app/api/hello/route.ts

import { NextResponse } from 'next/server';

interface ResponseData {
  message: string;
}

export async function GET(): Promise<NextResponse<ResponseData>> {
  return NextResponse.json({ message: 'Hello from Next.js!' });
}

export async function POST(req: Request): Promise<NextResponse<ResponseData>> {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error: unknown) {

    let errorMessage = "An unexpected error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: "Failed to send message.", error: errorMessage }, { status: 500 });
  }
}