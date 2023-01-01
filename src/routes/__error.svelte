<script lang="ts">
  import SocialMediaIcons from '../lib/SocialMediaIcons.svelte';
</script>


<!-- HTML -->
<section class="flex flex-col h-screen justify-center items-center text-center">
  <div class="container mx-4 max-w-screen-sm space-y-2 px-4">
    <h1 class="font-bold text-5xl text-white">404</h1>
    <p class="text-subtitle">Oups! Looks like this page doesn't exist just yet.</p>
    <button class="bg-transparent border mt-4 border-white font-bold hover:bg-green-400 hover:border-green-400 hover:text-black px-4 py-2 rounded-lg text-white" type="button">
      <a href="/">Return home</a>
    </button>
  </div>
  <SocialMediaIcons />
</section>