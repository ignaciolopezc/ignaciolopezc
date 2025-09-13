import { defineAction } from "astro:actions";
import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "astro:schema";

const resend = new Resend(import.meta.env.API_RESEND);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
      email: z.string().email("Email inválido"),
      subject: z.string().min(4, "El asunto debe tener al menos 4 caracteres"),
      message: z
        .string()
        .min(10, "El mensaje debe tener al menos 10 caracteres"),
    }),
    handler: async ({ name, email, subject, message }) => {
      // send an email
      const { data, error } = await resend.emails.send({
        from: `${name} <delivered@resend.dev>`,
        to: `${email}`,
        subject: `${subject}`,
        html: `<strong>${message}</strong>`,
      });

      if (error) {
        throw new Error("Error sending email");
      }

      return data;
    },
  }),
};
