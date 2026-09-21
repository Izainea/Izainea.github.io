import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tema: z.string(),
    // madurez de la entrada, como en un jardín digital
    estado: z.enum(['semilla', 'brote', 'perenne']).default('semilla'),
    // draft: aparece anunciada en las listas, pero sin página propia
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
