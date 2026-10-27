import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.padmanabhan.in',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
