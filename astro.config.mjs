import { defineConfig } from 'astro/config';

// GitHub Pages: https://codingfl05.github.io/ky_or_yk/
export default defineConfig({
  site: 'https://codingfl05.github.io',
  base: '/ky_or_yk',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
