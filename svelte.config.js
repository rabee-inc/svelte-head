import path from 'path';
import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
const preprocess = sveltePreprocess({
  typescript: true,
  // ...
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // runes を強制する
    runes: true,
  },
  kit: {
    adapter: adapter(),

    alias: {
      'svelte-head': path.resolve('./src/lib'),
      $components: path.resolve('./src/components'),
    },
  },
  preprocess,
};

export default config;
