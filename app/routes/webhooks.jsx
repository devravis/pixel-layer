import crypto from "crypto";

export const action = async ({ request }) => {
  const rawBody = await request.text();
  const hmacHeader = request.headers.get("x-shopify-hmac-sha256");

  const generatedHash = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
    .update(rawBody, "utf8")
    .digest("base64");

  // ✅ secure comparison
  const isValid = crypto.timingSafeEqual(
    Buffer.from(generatedHash),
    Buffer.from(hmacHeader || "")
  );

  if (!isValid) {
    return new Response("HMAC validation failed", { status: 401 });
  }

  return new Response("OK", { status: 200 });
};