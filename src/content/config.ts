import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  schema: {
    title: z.string(),
    description: z.string(),
    published: z.date(),
  }
});

const experience = defineCollection({
  schema: {
    title: z.string(),
    company: z.string(),
    start: z.string(),
    finish: z.string().nullable()
  }
});

export const collections = {
  articles,
  experience
};