# svelte-head

svelte-head is a component library that allows you to easily set meta information etc. to be output to head.

## Demo

- Live Demo: https://svelte-head.onrender.com
- REPL: https://svelte.dev/repl/0608f1c29c984f61b45242cc08011418?version=3.46.4

## Install

```bash
npm install svelte-head --save
```

## Usage

```html
<script>
  import {setOptions, Meta} from 'svelte-head';

  // setup default value
  setOptions({
    title(title) {
      return title ? `${title} | Svelte Head Demo` : 'Svelte Head Demo';
    },
    description(description) {
      return description || `svelte-head is a component library that allows you to easily set meta information etc. to be output to head.`;
    },
    keywords(keywords) {
      return keywords || `svelte,sveltekit,seo,head,meta`;
    },
    ogp(ogp) {
      return {
        type: 'website',
      };
    },
    twitter(twitter) {
      return {
        card: 'summary_large_image',
      };
    },
  });
</script>

<Meta title='Example Title' />
```

result

```html
<title>Example Title | Svelte Head Demo</title>
<meta name="description" content="svelte-head is a component library that allows you to easily set meta information etc. to be output to head.">
<meta name="keywords" content="svelte,sveltekit,seo,head,meta">
<meta property="og:title" content="Example Title | Svelte Head Demo">
<meta property="og:description" content="svelte-head is a component library that allows you to easily set meta information etc. to be output to head.">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

## License

MIT
