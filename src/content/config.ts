import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pageTitle: z.string(),
      coverImage: image().optional(),
    }),
});

export const collections = { pages };
