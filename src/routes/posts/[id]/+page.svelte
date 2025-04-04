<script>
  import { page } from '$app/state';
  import { Meta } from '$lib/index';
  let { post } = $derived(page.data);
</script>

<Meta title={`${post.id}. ${post.title}`} description={post.body} />

<main class="container-640 px16 py32">
  <h1 class="mb32">{post.id}. {post.title}</h1>
  <p class="mb32">{post.body}</p>

  <a href="/">top</a>
</main>
