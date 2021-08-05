<script lang="ts">
  import en_language from '$languages/en.json';
  const { skills } = en_language;
  const { skillCards } = skills;
</script>

<section class="p-12 bg-grey text-center">
  <div class="space-y-2 mb-12">
    <h2 class="text-4xl font-bold text-yellow-400">{skills.skillsTitle}</h2>
    <p class="text-subtitle max-w-screen-sm mx-auto">{skills.skillsSubtitle}</p>
  </div>
  <div class="max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
    {#each skillCards as skillcard}
      <div class="flex flex-col gap-4 items-center p-4">
        <img
          height="60px"
          width="60px"
          src={skillcard.icon}
          class=""
          alt="" />
        <h3 class="text-yellow-400 text-xl font-bold">{skillcard.title}</h3>
        <p class="text-subtitle">{skillcard.text}</p>
      </div>
    {/each}
  </div>
</section>