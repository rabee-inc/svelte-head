<script context="module">
  export async function load({params, fetch}) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    let json = await res.json();

    return {
      props: {
        post: json,
      }
    };
  }
</script>

<script>
  import {Meta} from '$lib/index';
  export let post;
</script>

<Meta title='{post.id}. {post.title}' description='{post.body}' />

<template lang='pug'>
  main.container-640.px16.py32
    h1.mb32 {post.id}. {post.title}
    p.mb32 {post.body}

    a(sveltekit:prefetch, href='/') top

</template>
