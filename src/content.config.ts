import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/thoughts" }),
  schema: z.object({
    title: z.string(),
    iat: z.string().regex(/^\d{2}-\d{2}-\d{4}$/),
    uat: z
      .string()
      .regex(/^\d{2}-\d{2}-\d{4}$/)
      .optional(),
    tag: z.string().optional().default("general"),
    permalink: z.string().optional(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { thoughts };
