import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    const website = String(body.website || "").trim();
    if (website) {
      return Response.json({ ok: true }); // silently ignore bots
    }

    if (!to || !from) {
      return Response.json(
        { ok: false, error: "Server not configured." },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from,
      to,
      subject: `New VTS lead: ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : `Phone: (not provided)`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
