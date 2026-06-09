import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wukowarszawa.pl',
  integrations: [sitemap()],
  // CSS is handled via PostCSS (postcss.config.js) with Tailwind
});
