<script lang="ts">
  const stats = [
    {
      "number": "4+",
      "subtitle": "Years of Product Management"
    },
    {
      "number": "18+",
      "subtitle": "Months of javascript development"
    },
    {
      "number": "2",
      "subtitle": "SaaS Products launched"
    },
    {
      "number": "10000+",
      "subtitle": "Lines of code written"
    }
  ];
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