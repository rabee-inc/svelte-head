<script>
  /**
   * @typedef {Object} Props
   * @property {string} [id]
   */

  /** @type {Props} */
  let { id = '' } = $props();
</script>

<svelte:head>
  {#if id}
    <script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={id}' crossorigin="anonymous"></script>
  {/if}
</svelte:head>