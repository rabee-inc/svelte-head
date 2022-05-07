<script>
  import '../app.css';
  import '/static/icons/icons.css';

  // setup default options in head
  import {setOptions, GoogleTagManager, GoogleAdSense} from '$lib/index';

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
    noindex(noindex) {
      return noindex;
    },
    nofollow(nofollow) {
      return nofollow;
    },
  });
</script>

<GoogleTagManager id='GTM_ID' />
<GoogleAdSense id='ca-pub-1234567890123456' />

<template lang="pug">
  div.f.fclm.w-full.min-h-full
    div.s-full
      slot
</template>
