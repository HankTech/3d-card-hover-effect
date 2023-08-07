import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://hanktech.github.io',
    base: '/hanktech',
    build: {
        assets: 'astro'
    }
});
