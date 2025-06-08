import { Form } from "@remix-run/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import useAlert from "~/hooks/useAlert";
import Alert from "~/components/alert";
import { sendEmail } from "~/services/email.client";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const { alert, showAlert, hideAlert } = useAlert();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await sendEmail({
        to_name: "Haridas", // Your name or recipient name
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      });

      showAlert({
        type: "success",
        text: "Message sent successfully!",
      });
      reset();
    } catch (error) {
      showAlert({
        type: "danger",
        text: "Failed to send message. Please try again.",
      });
      console.error("Email sending error:", error);
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              className="input"
              placeholder="John"
              required
              {...register("name")}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              className="input"
              placeholder="John@gmail.com"
              {...register("email")}
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              {...register("message")}
              rows={4}
              className="textarea"
              placeholder="Write your message here..."
              required
            />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
