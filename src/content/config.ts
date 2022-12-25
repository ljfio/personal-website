import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: {
    title: z.string(),
    description: z.string().optional(),
    published: z.date(),
  }
});

const experience = defineCollection({
  schema: {
    title: z.string(),
    company: z.string(),
    start: z.string().transform(d => new Date(d)),
    finish: z.string().transform(d => new Date(d)).optional()
  }
});

export const collections = {
  articles,
  experience
};