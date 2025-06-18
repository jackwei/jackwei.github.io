// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	//base: 'https://jackwei.github.io',
	site: 'https://jackwei.github.io',
	integrations: [mdx(), sitemap()],
});
