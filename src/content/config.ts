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

const poradnik = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(220),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    readingTime: z.number().min(1),
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .min(4, 'Każdy artykuł musi mieć min. 4 pytania FAQ'),
  }),
});

export const collections = { reviews, poradnik };
