import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  build: {
    format: 'file',
  },
  vite: {
    server: {
      // Allow Cloudflare tunnel / ngrok / etc. (any Host header)
      allowedHosts: true,
    },
  },
});
