<script lang="ts">
  import en_language from '$languages/en.json';
  const { stats } = en_language;
</script>

<section class="bg-black p-12">
  <div class="container mx-auto grid grid-cols-4 gap-4 text-center">
    {#each stats as stat}
      <div class="space-y-2">
        <h2 class="text-white font-bold text-5xl">{stat.number}</h2>
        <p class="text-subtitle">{stat.subtitle}</p>
      </div>
    {/each}
  </div>
</section>