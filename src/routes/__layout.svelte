<script>
  import '../app.css';
  import '/static/icons/icons.css';

  // setup default options in head
  import {setOptions} from '$lib/index';

  setOptions({
    title(title) {
      return title || 'Svelte Head Demo';
    },
  });

</script>

<template lang="pug">
  div.f.fclm.w-full.min-h-full
    div.s-full
      slot
</template>
