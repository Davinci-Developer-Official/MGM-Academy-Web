import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const POST = async (req: Request) => {
  try {
    const { question } = await req.json();
    if (!question) {
      return NextResponse.json({ error: "No question provided." }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: question }],
    });

    const answer = completion.choices[0].message?.content || "I couldn't process that.";
    return NextResponse.json({ answer });
  } catch (error: any) {
    console.error("Error communicating with OpenAI:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
};
