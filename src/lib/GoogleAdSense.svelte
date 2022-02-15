<script>
  export let id = '';
</script>

<svelte:head>
  {#if id}
    <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={id}' crossorigin="anonymous"></script>
  {/if}
</svelte:head>