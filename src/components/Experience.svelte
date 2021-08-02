<script lang="ts">
  import en_language from '../languages/en.json';
  const { experience } = en_language;
</script>

<section class="p-12 bg-black text-left">
  <div class="space-y-2 mb-8">
    <h2 class="text-3xl font-bold text-white max-w-sm">{experience.experienceTitle}</h2>
    <p class="text-subtitle max-w-lg">Through many years of experience in business management, product management and web development, I have developed key skills during my career.</p>
  </div>
  <div class="grid grid-cols-2 gap-4">
    {#each experience.experiences as job}
        <div class="flex justify-center items-start gap-4 py-8">
          <img
            height="60px"
            width="60px"
            class=""
            src={job.logo}
            alt="" />
          <div class="space-y-1">
            <h3 class="text-2xl text-yellow-400 font-bold">{job.title}</h3>
            <p class="text-subtitle text-opacity-40">{job.caption}</p>
            <p class="text-subtitle">{job.content}</p>
            <a class="text-yellow-400 underline hover:text-yellow-500" target="_blank" rel="noreferrer" href="https://www.salt.dev/">{experience.experienceLink}</a>
          </div>
        </div>
    {/each}
  </div>
</section>