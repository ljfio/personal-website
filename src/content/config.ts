import { z, defineCollection } from "astro:content";

const articles = defineCollection({
    schema: {
        title: z.string(),
        description: z.string(),
        published: z.date(),
    }
});

export const collections = {
    articles,
};