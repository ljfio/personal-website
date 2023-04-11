import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.date(),
    tags: z.array(z.string()).optional(),
    archive: z.boolean().optional()
  })
});

const experience = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    start: z.string().transform(d => new Date(d)),
    finish: z.string().transform(d => new Date(d)).optional()
  })
});

export const collections = {
  articles,
  experience
};