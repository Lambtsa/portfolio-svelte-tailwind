<script lang="ts">
  export let title: string = 'Full stack javascript developer and product manager.';
  export let description: string = 'Full stack javascript developer and product manager.';
</script>

<svelte:head>
  <title>{`Tom Lamb | ${title}`}</title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  <meta name="description" content="Product Manager and frontend developer." />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <link rel="icon" type="image/svg+xml" href="/assets/tom-lamb.svg" />
  <link rel="apple-touch-icon" href="/logo192.png" />
  <link rel="manifest" href="/manifest.json" />

  <meta property="og:title" content={`Tom Lamb | ${title}`} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://tom-lamb.com" />
  <meta property="og:site_name" content={`Tom Lamb | ${title}`} />

  <link rel="canonical" href="https://tom-lamb.com" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/logo192.png" />
  <link rel="manifest" href="/manifest.json" />
</svelte:head>