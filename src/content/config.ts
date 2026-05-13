import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'data',
  schema: z.object({
    text: z.string(),
    rating: z.number().min(1).max(5),
    location: z.string().optional(),
    service: z.string().optional(),
  }),
});

export const collections = { reviews };
