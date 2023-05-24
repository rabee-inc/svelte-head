<script>
  import { page } from '$app/stores';
  import { Meta } from '$lib/index';
  $: ({ post } = $page.data);
</script>

<Meta title='{post.id}. {post.title}' description='{post.body}' />

<template lang='pug'>
  main.container-640.px16.py32
    h1.mb32 {post.id}. {post.title}
    p.mb32 {post.body}

    a(href='/') top

</template>
