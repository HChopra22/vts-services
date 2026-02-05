import { NextResponse } from "next/server";
import { Resend } from "resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Honeypot
    const website = String(body?.website ?? "").trim();
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 }); // silently succeed
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ error: "Message is too short." }, { status: 400 });
    }
    if (message.length > 4000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    // Turnstile verification
    const token = String(body?.turnstileToken ?? "");
    const secret = process.env.TURNSTILE_SECRET_KEY;

    if (secret) {
      if (!token) {
        return NextResponse.json({ error: "Please complete the verification." }, { status: 400 });
      }

      const formData = new FormData();
      formData.append("secret", secret);
      formData.append("response", token);

      const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: formData,
      });

      const verifyData = await verifyRes.json().catch(() => null);

      if (!verifyData?.success) {
        return NextResponse.json({ error: "Verification failed. Try again." }, { status: 400 });
      }
    }



const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: process.env.FROM_EMAIL || "onboarding@resend.dev",
  to: [process.env.CONTACT_TO_EMAIL!],
  replyTo: email, // <— IMPORTANT: replies go to the customer
  subject: `New enquiry from ${name}`,
  text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}

Message:
${message}`,
});
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Server error. Try again." }, { status: 500 });
  }
}