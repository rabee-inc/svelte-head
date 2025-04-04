<script>
  import { page } from '$app/state';
  import Post from '$components/items/Post.svelte';
  import { Meta } from '$lib/index';

  let { posts } = page.data;

  let title = 'Example\nTitle';
  let description = 'Example\nDescription\ntest';
</script>

<Meta {title} {description} />

<main class="container-640 px16 py32">
  <div class="f fclm fm mb36">
    <h1 class="ts-large mb4">Svelte Head Demo</h1>
  </div>

  {#each posts as post}
    <div class="mb16">
      <Post {post} />
    </div>
  {/each}
</main>
