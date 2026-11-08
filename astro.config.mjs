import { defineConfig } from 'astro/config';

// Render Static Site에 루트 경로(/)로 배포한다. 배포 설정은 render.yaml.
export default defineConfig({
  base: '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
