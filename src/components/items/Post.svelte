<script>
  let { post } = $props();
</script>

<a class="block" href="/posts/{post.id}">
  <h2>{post.title}</h2>
  <p class="line-clamp-3">{post.body}</p>
</a>
