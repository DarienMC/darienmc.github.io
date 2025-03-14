import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()).optional(),
		img: z.string(),
		img_alt: z.string().optional(),
		anim: z.string().optional(),
	}),
});

export const collections = {
	'work' : workCollection,
};