<script>
  import { page } from '$app/stores';
  import Post from '$components/items/Post.svelte';
  import Meta from '../lib/Meta.svelte';
  let { posts } = $page.data;

  let title = 'Example\nTitle';
  let description = 'Example\nDescription\ntest';
</script>

<Meta title='{title}' description='{description}' />

<template lang='pug'>
  main.container-640.px16.py32
    div.f.fclm.fm.mb36
      h1.ts-large.mb4 Svelte Head Demo
    +each('posts as post')
      div.mb16
        Post(post='{post}')
</template>
