import { defineCollection, z } from "astro:content";

export const collections = {
  exp: defineCollection({
    schema: z.object({
      empresa: z.string(),
      fecha: z.string(),
      cargo: z.string(),
      date: z.date(),
    }),
  }),
};
