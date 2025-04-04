<script>
  import {options} from './options';

  /**
   * @typedef {Object} Props
   * @property {string} [title]
   * @property {string} [description]
   * @property {string} [keywords]
   * @property {boolean} [noindex]
   * @property {boolean} [nofollow]
   * @property {any} [ogp]
   * @property {any} [twitter]
   * @property {string} [canonical]
   */

  /** @type {Props} */
  let {
    title = '',
    description = '',
    keywords = '',
    noindex = false,
    nofollow = false,
    ogp = {},
    twitter = {},
    canonical = ''
  } = $props();

  // 改行コードを半角スペースに変換
  let sanitize = (str) => {
    return str.replace(/\r?\n/g, ' ');
  };

  let _title = $derived(sanitize(options.title(title)));
  let _description = $derived(sanitize(options.description(description)));
  let _keywords = $derived(sanitize(options.keywords(keywords)));
  let _ogp = $derived(options.ogp(ogp));
  let _twitter = $derived(options.twitter(twitter));
  let _noindex = $derived(options.noindex(noindex));
  let _nofollow = $derived(options.nofollow(nofollow));
  let _canonical = $derived(options.canonical(canonical));
  
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
