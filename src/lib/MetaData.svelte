<script lang="ts">
  import { content } from "../constants/content"
  export let title = content.job;
  export let description = content.job;
</script>

<svelte:head>
  <title>{`Tom Lamb | ${title}`}</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  <meta name="description" content={content.job} />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/logo192.png" />
  <link rel="manifest" href="/manifest.json" />

  <meta property="og:title" content={`Tom Lamb | ${title}`} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content={content.url} />
  <meta property="og:site_name" content={`Tom Lamb | ${title}`} />

  <link rel="canonical" href={content.url} />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/logo192.png" />
  <link rel="manifest" href="/manifest.json" />
</svelte:head>