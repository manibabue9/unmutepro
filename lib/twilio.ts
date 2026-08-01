export async function sendWhatsAppAlert(message: string) {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;
  const to = process.env.TWILIO_WHATSAPP_TO;
  if (!sid || !token || !from || !to) return { configured: false, sent: false };

  const form = new URLSearchParams({
    From: `whatsapp:${normaliseNumber(from)}`,
    To: `whatsapp:${normaliseNumber(to)}`,
    Body: message.slice(0, 1500),
  });
  const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: "POST",
    headers: { Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
  }).catch(() => null);
  return { configured: true, sent: Boolean(response?.ok) };
}

function normaliseNumber(value: string) {
  const cleaned = value.replace(/^whatsapp:/i, "").replace(/[^\d+]/g, "");
  return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
}

