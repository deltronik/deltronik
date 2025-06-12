import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(400),
    image: z.string(),
    imageAlt: z.string().min(1).max(200),
    date: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string().min(1).max(50)).min(1).max(10),
    categories: z.array(z.string().min(1).max(50)).min(1).max(10),
    author: z.string().min(1).max(100),
  }),
});

export const collections = {
  blog,
};
