<script lang="ts">
  import SocialMediaIcons from './SocialMediaIcons.svelte';
</script>

<!-- HTML -->
<section class="flex flex-col h-screen justify-center items-center text-center bg-hero bg-cover bg-center">
  <div class="container mx-4 max-w-screen-sm space-y-2">
    <h1 class="font-bold text-5xl text-yellow-400">Hello! 👋🏼 I'm Tom!</h1>
    <p class="text-subtitle">I'm a passionate fullstack javascript developer and product manager based out of Stockholm, Sweden.</p>
    <button class="bg-yellow-400 font-bold hover:bg-yellow-500 px-8 py-4 rounded-lg text-white" type="button">
      <a href="mailto:hello@tom-lamb.com">Contact me</a>
    </button>
  </div>
  <SocialMediaIcons />
</section>