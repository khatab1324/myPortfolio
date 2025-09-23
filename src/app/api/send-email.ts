"use server";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { name, email, subject, message } = schema.parse(req.body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      replyTo: email,
      to: "k.s.fayyad.dev@gmail.com",
      subject,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br/>")}</p>
             <hr/>
             <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>`,
    });

    if (!info.messageId) throw new Error("Send failed");
    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    console.error(err);
    const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
    return res.status(400).json({ ok: false, error: errorMessage });
  }
}
