import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pageTitle: z.string(),
    imagePath: z.string().optional(),
  }),
});

export const collections = { pages };
