<script lang="ts">
  import en_language from '$languages/en.json';
  const { appsTitle } = en_language;

  const apps = [
    '$assets/images/js.svg',
    '$assets/images/figma.svg',
    '$assets/images/react.svg',
    '$assets/images/sass.svg',
    '$assets/images/nodejs.svg',
    '$assets/images/visual_studio.svg',
    '$assets/images/analytics.svg',
    '$assets/images/html5.svg'
  ]
</script>

<section class="p-12 bg-grey">
  <div class="max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
    <div class="space-y-2">
      <h2 class="text-4xl font-bold text-white">{appsTitle.title}</h2>
      <p class="text-subtitle">{appsTitle.subtitle}</p>
    </div>
    <div class="col-span-2 flex justify-center items-center space-x-4">
      {#each apps as app}
        <img
          height="60px"
          width="60px"
          class=""
          src={app}
          alt="" />
      {/each}
    </div>
  </div>
</section>