// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: 'https://jackwei.github.io'
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
});
