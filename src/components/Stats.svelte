<script lang="ts">
  import en_language from '../languages/en.json';
  const { stats } = en_language;
</script>

<section class="bg-black p-12">
  <div class="container mx-auto grid grid-cols-4 gap-4 text-center">
    <div class="space-y-2">
      <h2 class="text-white font-bold text-5xl">{stats.stats1.number}</h2>
      <p class="text-subtitle">{stats.stats1.subtitle}</p>
    </div>
    <div class="space-y-2">
      <h2 class="text-white font-bold text-5xl">{stats.stats2.number}</h2>
      <p class="text-subtitle">{stats.stats2.subtitle}</p>
    </div>
    <div class="space-y-2">
      <h2 class="text-white font-bold text-5xl">{stats.stats3.number}</h2>
      <p class="text-subtitle">{stats.stats3.subtitle}</p>
    </div>
    <div class="space-y-2">
      <h2 class="text-white font-bold text-5xl">{stats.stats4.number}</h2>
      <p class="text-subtitle">{stats.stats4.subtitle}</p>
    </div>
  </div>
</section>