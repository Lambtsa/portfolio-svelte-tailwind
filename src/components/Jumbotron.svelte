<script lang="ts">
  import en_language from '../languages/en.json';
  import SocialMediaIcons from './SocialMediaIcons.svelte';
  const { jumbotron } = en_language;
</script>

<!-- HTML -->
<section class="flex flex-col h-screen justify-center items-center text-center bg-hero bg-cover bg-center">
  <div class="container mx-4 max-w-screen-sm space-y-2">
    <h1 class="font-bold text-4xl text-yellow-400">{jumbotron.jumbotronTitle}</h1>
    <p class="text-subtitle">{jumbotron.jumbotronSubtitle}</p>
    <button class="bg-yellow-400 font-bold hover:bg-yellow-500 px-8 py-4 rounded-lg text-white" type="button"><a href="mailto:hello@tom-lamb.com">{jumbotron.jumbotronBtn}</a></button>
  </div>
  <SocialMediaIcons />
</section>