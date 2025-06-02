import emailjs from "@emailjs/browser";

interface EmailParams {
  to_name: string;
  from_name: string;
  from_email: string;
  message: string;
}

export async function sendEmail(params: EmailParams) {
  if (
    !process.env.EMAILJS_SERVICE_ID ||
    !process.env.EMAILJS_TEMPLATE_ID ||
    !process.env.EMAILJS_PUBLIC_KEY
  ) {
    throw new Error("EmailJS environment variables not configured");
  }

  return emailjs.send(
    process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLATE_ID,
    {
      to_name: params.to_name,
      from_name: params.from_name,
      from_email: params.from_email,
      to_email: "haridaspawar0203@gmail.com", // Your receiving email
      message: params.message,
    },
    process.env.EMAILJS_PUBLIC_KEY
  );
}
