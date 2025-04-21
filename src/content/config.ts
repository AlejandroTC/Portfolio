import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  schema: z.object({
    position: z.string(),
    company: z.string(),
    site: z.string().optional(),
    location: z.string(),
    country: z.string(),
    from: z.number(),
    to: z.number().optional(),
  }),
});

const education = defineCollection({
  schema: z.object({
    school: z.object({
        abreviation: z.string(),
        name: z.string(),
        site: z.string().optional(),
    }),
    degree: z.string(),
    location: z.string(),
    country: z.string(),
    from: z.number(),
    to: z.number().optional(),
  }),
});

export const collections = { experiences, education };
