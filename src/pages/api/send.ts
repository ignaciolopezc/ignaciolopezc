import type { APIRoute } from "astro";
import { Resend } from "resend";
// import SampleEmail from "../../emails/sampleEmail";
// import { render } from "@react-email/render";

const resend = new Resend(import.meta.env.API_RESEND);

export const GET: APIRoute = async () => {
  // create the email
  // const emailContent = SampleEmail({ username: "Chris" });
  // const html = await render(emailContent);
  // const text = await render(emailContent, {
  //   plainText: true,
  // });

  // send an email
  const { data, error } = await resend.emails.send({
    from: "Nacho <ignaciolopezc@gmail.com>",
    to: ["delivered@resend.dev"],
    subject: "Hola Mundo!",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};
