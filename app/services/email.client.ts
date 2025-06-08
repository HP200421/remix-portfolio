import emailjs from "@emailjs/browser";

interface EmailParams {
  to_name: string;
  from_name: string;
  from_email: string;
  message: string;
}

export async function sendEmail(params: EmailParams) {
  if (
    !import.meta.env.EMAILJS_SERVICE_ID ||
    !import.meta.env.EMAILJS_TEMPLATE_ID ||
    !import.meta.env.EMAILJS_PUBLIC_KEY
  ) {
    throw new Error("EmailJS environment variables not configured");
  }

  return emailjs.send(
    import.meta.env.EMAILJS_SERVICE_ID,
    import.meta.env.EMAILJS_TEMPLATE_ID,
    {
      to_name: params.to_name,
      from_name: params.from_name,
      from_email: params.from_email,
      to_email: "haridaspawar0203@gmail.com", // Your receiving email
      message: params.message,
    },
    import.meta.env.EMAILJS_PUBLIC_KEY
  );
}
