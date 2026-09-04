import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wukowarszawa.pl',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
