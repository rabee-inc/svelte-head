<script>
  import { page } from '$app/state';
  let status = page.status;
  let message = page.error.message;
</script>

<main class="f fh s-full">
  <div class="py64 text-center">
    <h1 class="fs64">{status}</h1>
    <p>{message}</p>
  </div>
</main>
