import { Form } from "@remix-run/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { useForm } from "react-hook-form";
import useAlert from "~/hooks/useAlert";
import Alert from "~/components/alert";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  return null;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { alert, showAlert, hideAlert } = useAlert();
  const { register } = useForm<FormValues>();

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <Form method="post" className="w-full flex flex-col gap-7 mt-14">
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
            {/* {isLoading ? "Sending..." : "Send Message"} */}
            Submit
          </button>
        </Form>
      </div>
    </section>
  );
}
