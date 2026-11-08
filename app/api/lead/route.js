export async function POST(req) {
  const d = await req.json().catch(() => ({}));
  if (!d.name || !d.phone || !d.date) {
    return Response.json({ error: "Name, phone and event date are required." }, { status: 400 });
  }
  const text =
    `New quote request\nName: ${d.name}\nPhone: ${d.phone}\nEvent: ${d.type}\n` +
    `Date: ${d.date}\nVenue: ${d.venue || "-"}\nGuests: ${d.guests || "-"}\nNotes: ${d.notes || "-"}`;
  console.log(text);
  const url = process.env.LEAD_WEBHOOK_URL;
  if (url) {
    try {
      // "content" = Discord, "text" = Slack
      await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ content: text, text }) });
    } catch (e) { console.error("Webhook failed", e); }
  }
  return Response.json({ ok: true });
}
