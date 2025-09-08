import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.API_RESEND);

export const GET: APIRoute = async () => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/",
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // send an email
  const { data, error } = await resend.emails.send({
    from: `${name} <delivered@resend.dev>`,
    to: `${email}`,
    subject: `${subject}`,
    html: `<strong>${message}</strong>`,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};

// export const GET: APIRoute = async ({ url }) => {
//   const name = url.searchParams.get("name");
//   const email = url.searchParams.get("email");
//   const subject = url.searchParams.get("subject");
//   const message = url.searchParams.get("message");

//   // send an email
//   const { data, error } = await resend.emails.send({
//     from: `${name} <delivered@resend.dev>`,
//     to: `${email}`,
//     subject: `${subject}`,
//     html: `<strong>${message}</strong>`,
//   });

//   if (error) {
//     return new Response(JSON.stringify(error));
//   }

//   return new Response(JSON.stringify(data));
// };
