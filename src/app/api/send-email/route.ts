// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, subject, message } = schema.parse(data);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      replyTo: email,
      to: "k.s.fayyad.dev@gmail.com",
      subject,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br/>")}</p>
             <hr/>
             <p><strong>From:</strong> ${email}</p>`,
    });

    if (!info.messageId) throw new Error("Send failed");
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 400 }
    );
  }
}
