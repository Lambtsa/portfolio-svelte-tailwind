<script lang="ts">
  const stats = [
    {
      "title": "Python",
      "subtitle": "Most recent language I have learned"
    },
    {
      "title": "5+",
      "subtitle": "Number of years of product management"
    },
    {
      "title": "4",
      "subtitle": "Number of Products I have launched"
    },
    {
      "title": "100000+",
      "subtitle": "Number of lines of code I have written in 2021"
    }
  ];
</script>

<section class="bg-black p-12">
  <div class="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2 md:gap-4 text-center">
    {#each stats as stat}
      <div class="space-y-2">
        <h2 class="text-green-400 font-bold text-5xl">{stat.title}</h2>
        <p class="text-subtitle">{stat.subtitle}</p>
      </div>
    {/each}
  </div>
</section>