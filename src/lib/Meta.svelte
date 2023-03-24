<script>
  import {options} from './options';

  export let title = '';
  export let description = '';
  export let keywords = '';
  export let noindex = false;
  export let nofollow = false;
  export let ogp = {};
  export let twitter = {};
  export let canonical = '';

  $: _title = options.title(title);
  $: _description = options.description(description);
  $: _keywords = options.keywords(keywords);
  $: _ogp = options.ogp(ogp);
  $: _twitter = options.twitter(twitter);
  $: _noindex = options.noindex(noindex);
  $: _nofollow = options.nofollow(nofollow);
  $: _canonical = options.canonical(canonical);
  
</script>

<svelte:head>
  <!-- SEO -->
  <title>{_title}</title>
  <meta name="description" content="{_description}" />
  <meta name="keywords" content={_keywords} />
  {#if _canonical}
    <link rel="canonical" href="{_canonical}">
  {/if}
  {#if _noindex}
    <meta name="robots" content="noindex">
  {/if}
  {#if _nofollow}
    <meta name="robots" content="nofollow">
  {/if}

  <!-- OGP -->
  {#if !_ogp.title}
    <meta property="og:title" content="{_title}" />
  {/if}
  {#if !_ogp.description}
    <meta property="og:description" content="{_description}" />
  {/if}

  {#each Object.entries(_ogp) as [key, value]}
    <meta property="og:{key}" content="{value}" />
  {/each}

  {#each Object.entries(_twitter) as [key, value]}
    <meta name="twitter:{key}" content="{value}" />
  {/each}
</svelte:head>
