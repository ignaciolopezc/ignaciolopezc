import type { APIRoute } from "astro";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(import.meta.env.API_RESEND);

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(4, "El asunto debe tener al menos 4 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // Validar con Zod
    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          message: result.error.errors[0].message,
          errors: result.error.format(),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // send an email
    const { data, error } = await resend.emails.send({
      from: `${rawData.name} <delivered@resend.dev>`,
      to: `${rawData.email}`,
      subject: `${rawData.subject}`,
      html: `<strong>${rawData.message}</strong>`,
    });

    // Procesar datos validados
    console.log("Datos válidos:", data);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor",
      }),
      { status: 500 }
    );
  }
};
