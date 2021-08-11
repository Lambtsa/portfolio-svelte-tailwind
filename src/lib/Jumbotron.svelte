<script lang="ts">
  import SocialMediaIcons from './SocialMediaIcons.svelte';
</script>

<!-- HTML -->
<section class="flex flex-col h-screen justify-center items-center text-center">
  <div class="container mx-4 max-w-screen-sm space-y-2 px-4">
    <h1 id="typing" class="font-bold text-5xl text-white">Hello! 👋🏼 I'm Tom!</h1>
    <p class="text-subtitle">I'm a passionate fullstack javascript developer and product manager based out of Stockholm, Sweden.</p>
    <button class="bg-transparent border border-white font-bold hover:bg-green-300 hover:border-green-300 hover:text-black px-8 py-4 rounded-lg text-white" type="button">
      <a href="mailto:hello@tom-lamb.com">Contact me</a>
    </button>
  </div>
  <SocialMediaIcons />
</section>